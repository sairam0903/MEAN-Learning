var express    = require('express'),
    mongoose   = require('mongoose'),
    bodyParser = require('body-parser'),
    router     = express.Router(),
    contactDetails = mongoose.model('contacts');

router
    .use(bodyParser.json())

    .route('/contact')
    .get(function (req, res) {
        contactDetails.find(function (err, data) {
            res.send(data);
        });
    })
    .post(function (req, res) {

        var newContact = new contactDetails();

        newContact.lastName    = req.body.lastName;
        newContact.firstName   = req.body.firstName;
        newContact.email       = req.body.email;
        newContact.phoneNumber = req.body.phoneNumber;

        newContact.save(function (err, data) {
            if (err) res.send(500, err);
            res.send(data);
        });
    });

router
    .route('/contact/:id')
    .get(function (req, res) {
        console.log(req.params.id);

        //Finding the contact which contains the id in the list
        contactDetails.findById(req.params.id, function (err, data){
            //if (err) {
            //    throw err;
            //} else{
                res.send("data: ",data);
            //}
            //res.send({"message" : "TODO buddy", "id": req.params.id})
        })
    });

module.exports = router;

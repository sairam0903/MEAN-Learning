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
        //Finding the contact which contains the id in the list
        contactDetails.findById(req.params.id, function (err, data){
            if (err)
                res.send(err);
            res.json(data);
        })
    })
    .delete(function(req, res) {
        contactDetails.remove({ _id: req.params.id}, function(err, data) {
            if (err)
                res.send(err);
            res.json(data);
        });
    })
    .put(function(req, res){
        contactDetails.findById(req.params.id, function(err, contact){
            if(err)
                res.send(err);
            contact.lastName    = req.body.lastName;
            contact.firstName   = req.body.firstName;
            contact.email       = req.body.email;
            contact.phoneNumber = req.body.phoneNumber;
            contact.save(function(err, updatedContact){
                if(err)
                    res.send(err);

                res.json(updatedContact);
            });
        });
    });

module.exports = router;

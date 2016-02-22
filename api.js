var express    = require('express'),
    Bourne     = require('bourne'),
    bodyParser = require('body-parser'),

    db         = new Bourne('contacts.json'),
    router     = express.Router();

router
    .use(bodyParser.json())

    .route('/contact')
    .get(function (req, res) {
        db.find(function (err, data) {
            res.send(data);
        });
    })
    .post(function (req, res) {
        var contact = req.body;
        console.log("contact:", contact);
        db.insert(contact, function (err, data) {
            res.send(data);
        });
    });

router
    .route('/contact/:id')
    .get(function (req, res) {
        console.log(req.params.id);

        //Finding the contact which contains the id in the list
        db.find({'lsName':req.params.id}, function (err, data){
            if (err) {
                throw err;
            } else{
                res.send(data);
            }
            //res.send({"message" : "TODO buddy", "id": req.params.id})
        })
    });

module.exports = router;

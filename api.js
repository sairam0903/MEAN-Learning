var express        = require('express'),
    bodyParser     = require('body-parser'),
    contactDetails = require('./schemas/new-contact-schema'),
    router         = express.Router();

router
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))

    .route('/contact')
    .get(function (req, res) {
        contactDetails.find(function (err, data) {
            res.send(data);
        });
    })
    .post(function (req, res) {

        var newContact = contactDetails({
            lastName    : req.body.lastName,
            firstName   : req.body.firstName,
            email       : req.body.email,
            phoneNumber : req.body.phoneNumber
        });

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
        contactDetails.findByIdAndUpdate(req.params.id, {
            lastName    : req.body.lastName,
            firstName   : req.body.firstName,
            email       : req.body.email,
            phoneNumber : req.body.phoneNumber
        }, function(err, contact){
            if(err)
                res.send(err);
            res.json(contact);
        });
    });

module.exports = router;

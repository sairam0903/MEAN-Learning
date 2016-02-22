var express    = require('express'),
    Bourne     = require('bourne'),
    bodyParser = require('body-parser'),

    db         = new Bourne('contacts.json'),
    router     = express.Router();

router
    .use(bodyParser.json())

    .route('/contact')
    .get(function (req, res) {
        db.find({}, function (err, data) {
            res.json(data);
        });
    })
    .post(function (req, res) {
        var contact = req.body;
        console.log("contact:", contact);
        db.insert(contact, function (err, data) {
            res.json(data);
        });
    });

router
    .route('/contact/:id')
    .get(function (req, res) {
        console.log(req.params.id);
        res.send({"message" : "TODO buddy", "id": req.params.id})
    })

module.exports = router;

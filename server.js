var express = require('express'),
    mongoose   = require('mongoose');

    //initialize mongoose schemas
    require('./Schemas/new-contact-schema');

var api     = require('./api'),
    app     = express();

    //connect to local mongodb database
    mongoose.connect('mongodb://127.0.0.1:27017/contacts', function (error) {
        if (error) throw error;
    });

    //attach lister to connected event
    mongoose.connection.once('connected', function() {
        console.log("Connected to database !!")
    });

app
    .use(express.static('./node_modules'))
    .use(express.static('./public'))
    .use('/api', api)
    .get('*', function (req, res) {
        res.sendFile('main.html',{'root':__dirname + '/public'});
    })
    .listen(8000, function(){
        console.log('Server running at http://localhost:8000 !!')
    });

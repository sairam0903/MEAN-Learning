var express  = require('express'),
    mongoose = require('mongoose'),
    api      = require('./api'),
    app      = express();

    //connect to local mongodb database
    mongoose.connect('mongodb://sairam0903:indianLORDS44!@ds017852.mlab.com:17852/mydata', function (error) {
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
    .listen(5000, function(){
        console.log('Server running at http://localhost:5000 !!')
    });

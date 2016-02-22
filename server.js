var express = require('express'),
    api     = require('./api'),
    app     = express();

app
    .use(express.static('./node_modules'))
    .use(express.static('./bower_components'))
    .use(express.static('./public'))
    .use('/api', api)
    .get('*', function (req, res) {
        res.sendFile('main.html',{'root':__dirname + '/public'});
    })
    .listen(9001, function(){
        console.log('Server running at http://localhost:9001 !!')
    });

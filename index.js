const express = require('express');
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 4200;

// Log
app.use(morgan('dev'));

app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.get('/templates', function(req, res) {
    res.send(fs.readdirSync('./templates/'));
});

app.get('/template/:templatename', function(req, res) {
    res.sendFile(path.join(__dirname, './templates/' + req.params['templatename']));
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});


// Set Port
app.listen(port, function () {
    console.log('Running on localhost: '+port);
});

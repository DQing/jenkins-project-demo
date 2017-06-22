var path = require('path');
var express = require('express');
var db = require('./util/db');
var app = express();
var route = require('./route');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/hello', route.hello);
app.listen(3000, function () {
    console.log('listening on port 3000');
});
module.exports = app;

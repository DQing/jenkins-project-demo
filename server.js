var path = require('path');
var express = require('express');
var db = require('./util/db');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/hello', function (req, res) {
    db.query(
        'select * from test where idtest = 12', function (err, result) {
            if (err) {
                throw err;
            } else {
                console.log('result', result);
                res.send(result[0].testcol);
            }
        }
    );
});
app.listen(4444, function () {
    console.log('listening on port 4000');
});
module.exports = app;

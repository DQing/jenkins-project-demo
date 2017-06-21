/**
 * Created by douqing on 17-6-21.
 */

var mysql = require('mysql');
var db = mysql.createConnection({
    'host': 'localhost',
    'user': 'root',
    'password': '111111',
    'database': 'jenkins',
    'port': '3306'
});


db.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('connect success');
    }
});

module.exports = db;

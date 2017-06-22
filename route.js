/**
 *
 * Created by douqing on 17-6-21.
 */
var db = require('./util/db');

exports.hello = function (req, res) {
    db.query(
        'select * from test where idtest = 12', function (err, result) {
            if (err) {
                throw err;
            } else {
                // console.log('result', result);
                res.send(result);
            }
        }
    );
};
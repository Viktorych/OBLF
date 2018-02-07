
var sql = require('mssql'),
    connPoolPromise = null;

function getConnPoolPromise() {
    if (connPoolPromise) return connPoolPromise;

    connPoolPromise = new Promise(function (resolve, reject) {
        var conn = new sql.ConnectionPool(require('./dbConfig'));

        conn.on('close', function () {
            connPoolPromise = null;
        });

        conn.connect().then(function (connPool) {
            return resolve(connPool);
        }).catch(function (err) {
            connPoolPromise = null;
            return reject(err);
        });
    });

    return connPoolPromise;
}

// Fetch data example
exports.query = function (sqlQuery, callback) {

    getConnPoolPromise().then(function (connPool) {

        var sqlRequest = new sql.Request(connPool);
        return sqlRequest.query(sqlQuery);

    }).then(function (result) {
        callback(null, result);
    }).catch(function (err) {
        callback(err);
    });

};
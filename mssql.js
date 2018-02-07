const sql = require('mssql');
const config = {
    user: 'sa',
    password: 'sa',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'oblfview'
};
var rr=0;
exports.pool = new sql.ConnectionPool(config, function (err) {
    // ... error checks
    /*
            // Query
        var r=pool1.request().query('SELECT     ID, DateTime_\n' +
            'FROM         Measurements\n' +
            'WHERE     (ID > 93000)', function (err, result) {
            // ... error checks

            console.dir(result);
        });

*/

});
exports.r=rr;
exports.getData = function () {
    //var r=100;
    //pool = new sql.ConnectionPool(config, function (err) {
        this.pool.request().query('SELECT     ID, DateTime_\n' +
            'FROM         Measurements\n' +
            'WHERE     (ID > 93000)', function (err, result) {
            // ... error checks
            //list = result;
            rr= result.recordset;
            //console.dir(r);
            //res.render('index', {title: list.recordset[0].toString()});

        });
    //});
return rr;
};
/*

'SELECT     ID\n' +
'FROM         Measurements\n' +
'WHERE     (ID > 10000)'
 */
//module.exports=rr, getData;
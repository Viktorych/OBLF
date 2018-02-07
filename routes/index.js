var express = require('express');
var pool = require("../mssql");
var router = express.Router();
var list = 0;
/* GET home page. */
router.get('/', function (req, res, next) {/*
    pool.pool.request().query('SELECT     ID, DateTime_\n' +
        'FROM         Measurements\n' +
        'WHERE     (ID > 93000)', function (err, result) {
        // ... error checks
        list = result;
        //console.dir(list.recordset);
        res.render('index', {title: list.recordset[0].toString()});

    });*/
    list=pool.getData();
    res.render('index', {title: list});
    //
    //
    console.log(list);
    //console.log(pool.rr);

});
module.exports = router;

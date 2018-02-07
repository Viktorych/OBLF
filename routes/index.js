var express = require('express');
var DBUtil = require('../dbUtils');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: "Данные"});
});


router.get('/measurements', function (req, res, next) {
    res.render('measurements', {title: "измерения"});
});

router.get('/measurementsTable', function (req, res, next) {

    res.setHeader("Content-Type", "application/json; charset=utf-8");
    DBUtil.query('SELECT     *\n' +
        'FROM         Measurements\n' +
        'WHERE     (ID > 94000)', function (err, recordsets) {
        if (err) console.log(err);
        var data = {data: recordsets.recordset};

        res.end(JSON.stringify(data));
    });
});

router.get('/analiz/:id', function (req, res, next) {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    var sql = "SELECT     Component, Value_    FROM         Results    WHERE     (Measurement ="+    req.params.id +")";
    console.log(sql);
    DBUtil.query(sql, function (err, recordsets) {
        if (err) console.log(err);
        var data = {data: recordsets.recordset};

        res.end(JSON.stringify(data));
    });
    //res.send('What is up ' + req.params.id + '!');
});


module.exports = router;


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/weekly-classes', function (req, res) {
    var db = req.db;
    var classes = db.get('classes');
    collection.find({}, {}, function (e, docs) {
        res.render('weekly-classes', {
            "classes": docs
        });
    });
});

module.exports = router;
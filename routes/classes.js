var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Classes = require('../models/Classes.js');


/* GET users listing. */
router.get('/', function (req, res, next) {
    Classes.find(function (err, classes) {
        if (err) {
            return next(err);
        }
        res.json(classes);
    });
});

router.post('/', function (req, res, next) {
    Classes.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.get('/type/:classType', function (req, res, next) {
    var cType = req.params.classType;
    console.log("Looking for classes by type of " + cType);
    Classes.find({
        'type': cType
    }, function (err, classes) {
        if (err) return next(err);
        res.json(classes);
    });
});


router.get('/:id', function (req, res, next) {
    Classes.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.put('/:id', function (req, res, next) {
    Classes.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.delete('/:id', function (req, res, next) {
    Classes.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
var express = require('express');
var router = express.Router();
var request = require('request');

var header;
request('http://api.7171.la/api/menu?token=hnnz&code=4aea91ea6d780ff8286ffd2e5e838a7e', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);
        header = body[0]._data;
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { header: header });
});
router.get('/info', function(req, res, next) {
    res.render('sc_info', { header: header });
});
router.get('/contact', function(req, res, next) {
    res.render('contact', { header: header });
});
router.get('/dynamics', function(req, res, next) {
    res.render('sc_dynamics', { header: header });
});
router.get('/construction', function(req, res, next) {
    res.render('construction', { header: header });
});
router.get('/sconstruction', function(req, res, next) {
    res.render('special_construction', { header: header });
});
router.get('/employment', function(req, res, next) {
    res.render('employment_practice', { header: header });
});
router.get('/accouting', function(req, res, next) {
    res.render('special_major_accouting', { header: header });
});
router.get('/accouting1', function(req, res, next) {
    res.render('special_major_accouting1', { header: header });
});
router.get('/artdesign', function(req, res, next) {
    res.render('special_major_artdesign', { header: header });
});
router.get('/artdesign1', function(req, res, next) {
    res.render('special_major_artdesign1', { header: header });
});
router.get('/computer', function(req, res, next) {
    res.render('special_major_computer', { header: header });
});
router.get('/computer1', function(req, res, next) {
    res.render('special_major_computer1', { header: header });
});
router.get('/teacher', function(req, res, next) {
    res.render('teacher', { header: header });
});
router.get('/page1', function(req, res, next) {
    res.render('news_page1', { header: header });
});
router.get('/page2', function(req, res, next) {
    res.render('news_page2', { header: header });
});
router.get('/page3', function(req, res, next) {
    res.render('news_page3', { header: header });
});
router.get('/page4', function(req, res, next) {
    res.render('news_page4', { header: header });
});


var header1;
request('http://api.7171.la/api/menu?token=hnnz&code=4aea91ea6d780ff8286ffd2e5e838a7e', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);
        header1 = body[1]._data;
    }
});
router.get('/zszt', function(req, res, next) {
    res.render('zszt/index', { header: header1 });
});
router.get('/zszt/contact', function(req, res, next) {
    res.render('zszt/contact',{header:header1});
});
router.get('/zszt/info', function(req, res, next) {
    res.render('zszt/sc_info',{header:header1});
});
router.get('/zszt/news', function(req, res, next) {
    res.render('zszt/enrolment_news',{header:header1});
});
router.get('/zszt/policy', function(req, res, next) {
    res.render('zszt/admission_policy',{header:header1});
});
router.get('/zszt/brochure', function(req, res, next) {
    res.render('zszt/school_admission_brochure',{header:header1});
});
router.get('/zszt/plan', function(req, res, next) {
    res.render('zszt/enrollment_plan',{header:header1});
});
router.get('/zszt/accouting', function(req, res, next) {
    res.render('zszt/special_major_accouting', { header: header1 });
});
router.get('/zszt/accouting1', function(req, res, next) {
    res.render('zszt/special_major_accouting1', { header: header1 });
});
router.get('/zszt/artdesign', function(req, res, next) {
    res.render('zszt/special_major_artdesign', { header: header1 });
});
router.get('/zszt/artdesign1', function(req, res, next) {
    res.render('zszt/special_major_artdesign1', { header: header1 });
});
router.get('/zszt/computer', function(req, res, next) {
    res.render('zszt/special_major_computer', { header: header1 });
});
router.get('/zszt/computer1', function(req, res, next) {
    res.render('zszt/special_major_computer1', { header: header1 });
});
router.get('/zszt/sign', function(req, res, next) {
    res.render('zszt/sign_online',{header:header1});
});
router.get('/zszt/page1', function(req, res, next) {
    res.render('zszt/news_page1',{header:header1});
});
router.get('/zszt/page2', function(req, res, next) {
    res.render('zszt/news_page2',{header:header1});
});
router.get('/zszt/page3', function(req, res, next) {
    res.render('zszt/news_page3',{header:header1});
});
router.get('/zszt/page4', function(req, res, next) {
    res.render('zszt/news_page4',{header:header1});
});
module.exports = router;

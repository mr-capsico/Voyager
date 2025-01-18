var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('char', { title: 'Message Title' });
});

module.exports = router;

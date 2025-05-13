import express from "express";
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('splash', { title: 'Message Title' });
});

export default router;

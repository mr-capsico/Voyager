import express from "express";
import fs from "fs";
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('inventory');
});

export default router;

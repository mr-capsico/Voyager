import express from 'express';
import fs from "fs";
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    fs.readFile('./public/json/characters.json', (err, json) => {
        let obj = JSON.parse(json);
        var character = obj["Valeria Messalla"]

            res.render('char', { name: character["name"],  nation: character["nation"], group: character["group"], bio: character["bio"], img: character["img"]});
    });
});
export default router;

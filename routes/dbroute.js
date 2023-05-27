const router = require('express').Router();
const { db } = require('../models/dbconnection');

router.get('/readdata', (req, res) => {
    const sqlQuery = "SELECT * FROM sampah";

    db.query(sqlQuery, (err, result) => {
        if(err){
            res.send(err).status(400);
        }else{
            res.send(result).status(200);
        }
    });
});

module.exports = router;
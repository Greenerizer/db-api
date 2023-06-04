const router = require('express').Router();
const { db } = require('../models/dbconnection');

router.get('/sampah', (req, res) => {
    const sqlQuery = "SELECT * FROM sampah";

    db.query(sqlQuery, (err, result) => {
        if(err){
            res.send(err).status(400);
        }else{
            res.send(result).status(200);
        }
    });
});

router.get('/rewards', (req, res) => {
    const sqlQuery = "SELECT * FROM rewards";

    db.query(sqlQuery, (err, result) => {
        if(err){
            res.send(err).status(400);
        }else{
            res.send(result).status(200);
        }
    });
});

router.get('/lokasi', (req, res) => {
    const sqlQuery = "SELECT * FROM lokasi";

    db.query(sqlQuery, (err, result) => {
        if(err){
            res.send(err).status(400);
        }else{
            res.send(result).status(200);
        }
    });
});

module.exports = router;
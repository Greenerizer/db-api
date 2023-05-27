const mysql = require('mysql');

const db = mysql.createPool({
    host:'34.101.142.154',
    user:'root',
    password:'TDt"<"nnd?ZL)N~1',
    database:'greenerizer',
});

console.log('DB connection established');

exports.db = db;
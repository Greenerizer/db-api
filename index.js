const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const dbRoute = require('./routes/dbroute');
const homeRoute = require('./routes/homeroute');

const port = process.env.PORT || 8080;
const host = process.env.HOST;

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', homeRoute);
app.use('/api/db', dbRoute);

app.listen(port, () =>{
    console.log('Running at port', port, host);
});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./connection');

const dotenv = require('dotenv');
dotenv.config()

const app = express();

app.use(bodyParser.json());
app.use(cors());

connection();

app.listen(process.env.PORT, () =>{
    console.log(`Server running on port ${process.env.PORT}`);
})

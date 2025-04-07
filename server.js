require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    } else {
        console.log('Connected to mysql database');
    }
});




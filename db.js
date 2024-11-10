// db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'yourUsername',      // Replace with your MySQL username
    password: 'yourPassword',  // Replace with your MySQL password
    database: 'hospital_db'    // Replace with your database name
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

module.exports = connection;

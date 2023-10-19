const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'VILLACARMEN'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Parse JSON requests
app.use(bodyParser.json());

// Define API endpoints
app.get('/api/data', (req, res) => {
  // Replace this with a MySQL query to fetch data
  db.query('SELECT * FROM your_table', (error, results) => {
    if (error) {
      throw error;
    }
    res.json(results);
  });
});

app.post('/api/data', (req, res) => {
  const { newData } = req.body;
  // Replace this with a MySQL query to insert data
  db.query('INSERT INTO your_table (column_name) VALUES (?)', [newData], (error, results) => {
    if (error) {
      throw error;
    }
    res.json({ message: 'Data inserted successfully' });
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

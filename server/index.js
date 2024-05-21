const express = require('express'); // Import Express framework
const mysql = require('mysql2'); // Import MySQL library
const cors = require('cors'); // Import CORS middleware

const app = express(); // Create an Express application

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Enable JSON parsing for incoming requests

// Create a MySQL database connection
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'dishdivedb'
});

// Route to handle user registration
app.post('/register', (req, res) => {
    const email = req.body.email; // Get email from request body
    const username = req.body.username; // Get username from request body
    const password = req.body.password; // Get password from request body

    // Insert new user into the database
    con.query(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, password],
        (err, result) => {
            if (err) {
                console.log(err.code); // Log error code
                if (err.code == 'ER_DUP_ENTRY') {
                    // Handle duplicate entry error
                    return res.send({ message: 'Already a user with this username or email', code: err.code });
                } else {
                    // Handle other errors
                    return res.send({ err: err });
                }
            } else {
                // Send success response
                return res.send({ userRegistered: true });
            }
        }
    );
});

// Route to handle user login
app.post('/login', (req, res) => {
    const username = req.body.username; // Get username from request body
    const password = req.body.password; // Get password from request body

    // Check if user exists in the database
    con.query(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password],
        (err, result) => {
            if (err) {
                // Send error response
                return res.send({ err: err });
            }

            if (result.length > 0) {
                // Send user data if found
                return res.send(result);
            } else {
                // Send user not found message
                return res.send({ message: 'User Not Found' });
            }
        }
    );
});

// Connect to the MySQL database
con.connect((err) => {
    if (err) {
        console.log(err); // Log connection error
    } else {
        console.log('MySql database connected!'); // Log successful connection
    }
});

// Start the Express server
app.listen(3310, (err) => {
    console.log('Backend Server Running'); // Log server running message
});

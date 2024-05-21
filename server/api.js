// Import required modules
const express = require('express'); // Import Express.js
const cors = require('cors'); // Import CORS (Cross-Origin Resource Sharing) middleware
const axios = require('axios'); // Import Axios for making HTTP requests

// Create an Express.js app instance
const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON request bodies
app.use(cors()); // Enable CORS for all routes

// Route handler for fetching recipes based on a search query
app.get('/recipes/:query', async (req, res) => {
  try {
    // Make a GET request to the Edamam Recipe Search API with the provided query
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?q=${req.params.query}&app_id=b8943b20&app_key=9f2a35c8f3e3842d3e03d63c2b00a69d&type=public`
    );

    // Send the API response data back to the client
    res.send(response.data);
  } catch (error) {
    // If an error occurs during the API request, log it to the console
    console.log("API request failed:" + error);
  }
});

// Start the server and listen on port 3311
app.listen(3311, (err) => {
  if (err) {
    // If an error occurs during server startup, log it to the console
    console.log("API server has problems!");
  } else {
    // If the server starts successfully, log a message to the console
    console.log('API server running without problems!');
  }
});
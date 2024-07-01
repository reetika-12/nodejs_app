const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000; // Choose the port you want to run the server on

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to handle user creation
app.post('/api/create-user', (req, res) => {
  // Extract data from the request body
  const { email, identities, displayName, objectId, givenName, surname, jobTitle, streetAddress, city, postalCode, state, country, extension_customAttribute1, extension_customAttribute2, step, client_id, ui_locales } = req.body;

  // Log the received data (for demonstration purposes)
  console.log('Received request body:', req.body);

  // Example of handling the received data
  // You can perform actions like saving to a database, logging, etc.

  // Respond with a success message
  res.status(200).json({ message: 'User created successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

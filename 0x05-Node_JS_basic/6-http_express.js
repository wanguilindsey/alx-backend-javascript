const express = require('express');

/**
 * Creates an HTTP server using the Express framework.
 * @module
 */
const app = express();
const PORT = 1245;

/**
 * Handles GET requests to the root endpoint.
 * Sends "Hello Holberton School!" as a response.
 *
 * @name GET /
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

/**
 * Starts the HTTP server and listens on the specified port.
 */
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;

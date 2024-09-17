const http = require('http');

/**
 * HTTP server that responds with "Hello Holberton School!" to any request.
 * @module 4-http
 */

/**
 * Handles incoming HTTP requests and sends a "Hello Holberton School!" response.
 * 
 * @param {http.IncomingMessage} req - The incoming HTTP request.
 * @param {http.ServerResponse} res - The server response to send back.
 */
const handleRequest = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });  // Set response header
  res.end('Hello Holberton School!');  // Send response body
};

// Create and start the HTTP server
const app = http.createServer(handleRequest);
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;

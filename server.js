/**
 * @author rloayza
 */
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist/wed-rom-nib')));

// Catch all other routes and return the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/wed-rom-nib/index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

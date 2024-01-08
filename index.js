const express = require('express');

// create the express app
const app = express();

// set the port
const port = process.env.PORT || 3001;


// set the route
app.get('/', (req, res) => res.send('Hello World!'))

// start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)})
const express = require('express')
const app = express()
const port = 3003

const fs = require('fs').promises;
const exists = require('fs').exists;
const path = require('path');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));


console.log("Booting up server...");

app.get('/', (req, res) => {
  console.log("GET request to route: /");
  res.send("This is an express server");
});


app.listen(port);
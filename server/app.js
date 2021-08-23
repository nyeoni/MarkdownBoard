const express = require('express')
const bodyParser = require('body-parser');
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

const port = 5000;
app.listen(port)
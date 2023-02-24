const express = require("express");
const app = express();
const port = 8000;

app.get('/', function (req, res) {
    res.send(`Server running on port ${port}`)
  })

app.listen(port)
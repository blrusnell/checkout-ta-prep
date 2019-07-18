const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const db = require('../database/index.js');

const app = express();

//Parse json and x-ww-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static("dist"));

app.post('/checkout', (req, res) => {
  let profile = req.body
  db.addProfile(profile, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    res.send('Added a Profile! Sup bitches')
  })
})


app.listen(3000, () => console.log("Now listening on port 3000!"));

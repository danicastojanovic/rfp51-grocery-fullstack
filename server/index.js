// YOUR SERVER CODE HERE

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const db = require("../db/index.js");
const path = require("path");

app.use(cors()); //don't worry (cross origin)

app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('/GroceryList', function (req, res) {
  db.query('SELECT groceryItem, quantity FROM groceryListItems', function (error, results) {
    if (error) throw error;
    else {
      res.status(200).send(results);
    }
  })
});

app.listen(port, () => {
  console.log("listening on 8080");
});

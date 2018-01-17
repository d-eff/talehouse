const express = require('express');
const app = express();
const files = require('./fileLoader');

let mdata = {};

app.get("/", (req, res) => {
  // console.log("hey " + files.data["barkeep"]);
  console.log("hey " + mdata);
  res.json(mdata);
});

const startServer = () => {
  files.loadFiles().then(data => {
    console.log("data" + data);
    mdata = data;
    app.listen(3000, () => {
      console.log("server")
    });
  });
}

startServer();
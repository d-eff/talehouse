const express = require('express');
const app = express();
const { barkeep, story, tellMe, truth } = require('./fileLoader');

app.get("/", (req, res) => {
  // console.log("hey " + files.data["barkeep"]);
  console.log(barkeep[0]);
  res.json(barkeep);
});

app.listen(3000, () => {
  console.log("server")
});
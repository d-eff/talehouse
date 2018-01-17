const express = require('express');
const app = express();
const data = require('./fileLoader');

app.get('/', (req, res) => {
  // console.log("hey " + files.data["barkeep"]);
  console.log(barkeep[0]);
  res.json(barkeep);
});

app.get('/barkeep', (req, res, next) => {
  res.json(getRand('barkeep'));
});

app.get('/story', (req, res, next) => {
  res.json(getRand('story'));
});

app.get('/tellMe', (req, res, next) => {
  res.json(getRand('tellMe'));
});

app.get('/truth', (req, res, next) => {
  res.json(getRand('truth'));
});

const getRand = (section) => {
  let sectionData = data[section];
  return sectionData[Math.floor(Math.random() * sectionData.length)]
}

app.listen(3000, () => {
  console.log('server');
});
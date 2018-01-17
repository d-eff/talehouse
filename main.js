const express = require('express');
const app = express();
const data = require('./fileLoader');

app.use(express.static('./static'));

app.get('/barkeep/:count?', (req, res, next) => {
  res.json(getRand('barkeep', req.params.count));
});

app.get('/story/:count?', (req, res, next) => {
  res.json(getRand('story', req.params.count));
});

app.get('/tellMe/:count?', (req, res, next) => {
  res.json(getRand('tellMe', req.params.count));
});

app.get('/truth/:count?', (req, res, next) => {
  res.json(getRand('truth', req.params.count));
});

const getRand = (section, count = 1) => {
  const sectionData = data[section];
  let response = [];
  let max = Math.min(count, sectionData.length);
  for(let x = 0; x < max; x++) {
    response.push(sectionData[Math.floor(Math.random() * sectionData.length)]);
  }
  return response;
}

app.listen(3000, () => {
  console.log('server');
});
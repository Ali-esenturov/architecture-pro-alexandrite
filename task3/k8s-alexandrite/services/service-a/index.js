require('./tracing');

const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/', async (req, res) => {
  const response = await fetch('http://service-b:8080');
  const data = await response.json();

  res.json({
    service: 'service-a',
    fromServiceB: data
  });
});

app.listen(8080, () => {
  console.log('service-a listening on 8080');
});

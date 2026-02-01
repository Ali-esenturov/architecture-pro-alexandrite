require('./tracing');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ service: 'service-b', result: 42 });
});

app.listen(8080, () => {
  console.log('service-b listening on 8080');
});

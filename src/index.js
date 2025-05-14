const express = require('express');
const app = express();
let a = 0;
app.get('/time', (req, res) => {
  a++;
  res.json({ time: Math.floor(Date.now() / 1000) });
});
app.get('/metrics', (req, res) => {
  res.json({ count: a });
});
app.listen(3000, () => console.log('Listening on 3000'));

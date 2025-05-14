const express = require('express');
const app = express();
app.get('/time', (req, res) => {
  res.json({ time: Math.floor(Date.now() / 1000) });
});
app.listen(3000, () => console.log('Listening on 3000'));
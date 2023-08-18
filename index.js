const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static('static'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.post('/send-message', (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const express = require('express');
const config = require('./shared/config');

const app = express();

app.use(express.json());

app.listen(config.port, () => {
  console.log(`http://localhost:${config.port}`);
});
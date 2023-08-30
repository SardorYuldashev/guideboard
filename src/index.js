const express = require('express');
const config = require('./shared/config');
const handleError = require("./shared/errors/handle");
const usersRoute = require('./modules/users/_api');
const guidesRoute = require('./modules/guides/_api');

const app = express();

app.use(express.json());

app.use(usersRoute);
app.use(guidesRoute);

app.use(handleError);

app.listen(config.port, () => {
  console.log(`http://localhost:${config.port}`);
});
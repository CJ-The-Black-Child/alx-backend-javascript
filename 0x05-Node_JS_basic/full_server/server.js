const express = require('express');
const controllerRouting = require('./routes/index');

const app = express();
const port = 1245;

controllerRouting(app);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

module.exports = app;

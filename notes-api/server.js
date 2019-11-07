const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();

app.listen(port);

console.log('notes API server started on port ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./app/routes/appRoutes.js');

routes(app);

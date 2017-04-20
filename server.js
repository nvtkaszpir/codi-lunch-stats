'use strict';

const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
const mongolabUri = process.env.MONGOLAB_URI || 'mongodb://localhost/codi-lunch-stats';

const mongoose = require('mongoose');
const Event = require('./api/models/event');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(mongolabUri);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routers/event');
routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);

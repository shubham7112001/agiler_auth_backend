const express = require('express');
const globalErrorHandler = require('./error-handlings/global-error-handler');

app = express();

app.use(globalErrorHandler);


app.use(express.json());
const server = require('./app');


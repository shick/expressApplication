/**
 * Created by a600409 on 21/03/2016.
 */

var express = require('./config/express');

var app = express();
app.listen(3000);

module.exports = app;

console.log('Server running at http://localhost:3000/');

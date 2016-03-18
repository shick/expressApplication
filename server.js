/**
 * Created by gerardoscarpinati on 18/03/16.
 */

var express = require('express');
var app = express();

var logger = function (req, res, next) {
    console.log('Reveived request: ' + req.method + ' ' + req.path);
    next();
}

app.use(logger);
app.use('/', function (req, res) {
    res.send('Hello World');
});

app.listen(3000);

console.log('Server running at http://localhost:3000/');

module.exports = app;
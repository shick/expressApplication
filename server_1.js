/**
 * Created by gerardoscarpinati on 18/03/16.
 */

var express = require('express');

// Chaining several middleware in a single routing definition
var hasName = function (req, res, next) {
    if (req.param('name')) {
        next();
    }
    else {
        res.send('What\'s your name?');
    }
};

var sayHello = function (req, res, next) {
    res.send('Hello ' + req.param('name'));
}

var app = express();

var logger = function (req, res, next) {
    console.log('Received request: ' + req.method + ', ' + req.path + ', name: ' +
        JSON.stringify(req.params));
    next();
}

app.use(logger);
app.get('/', hasName, sayHello);
app.listen(3000);

console.log('Server running at http://localhost:3000/');

module.exports = app;
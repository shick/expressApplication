/**
 * Created by a600409 on 21/03/2016.
 */

module.exports = function (app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
}
var mongoose = require("mongoose");
var users = require("./../controllers/users.js");
var dialogs = require("./../controllers/dialogs.js");

module.exports = function(app){
    app.post('/login', function(req, res) {
        users.login(req, res);
    });
    app.post('/register', function(req, res) {
        users.register(req, res);
    });
    app.get('/dialog', function(req, res) {
        dialogs.index(req, res);
    });
    app.post('/dialog', function(req, res) {
        dialogs.create(req, res);
    });

};

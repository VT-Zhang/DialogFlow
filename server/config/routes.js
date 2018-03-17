var mongoose = require("mongoose");
var users = require("./../controllers/users.js");
var dialogs = require("./../controllers/dialogs.js");

module.exports = function (app) {
    app.post('/login', function (req, res) {
        users.login(req, res);
    });
    app.post('/register', function (req, res) {
        users.register(req, res);
    });
    app.get('/dialog', function (req, res) {
        dialogs.index(req, res);
    });
    app.get('/dialog/:id', function (req, res) {
        dialogs.show(req, res);
    });
    app.post('/dialog/', function (req, res) {
        dialogs.create(req, res);
    });
    app.put('/dialog/:id', function (req, res) {
        dialogs.update(req, res);
    });
    app.delete('/dialog/:id', function (req, res) {
        dialogs.delete(req, res);
    });

};

var mongoose = require("mongoose");
var users = require("./../controllers/users.js");
var cards = require("./../controllers/cards.js");

module.exports = function (app) {
    app.post('/login', function (req, res) {
        users.login(req, res);
    });
    app.post('/register', function (req, res) {
        users.register(req, res);
    });
    app.get('/card', function (req, res) {
        cards.index(req, res);
    });
    app.get('/card/:id', function (req, res) {
        cards.show(req, res);
    });
    app.post('/card/', function (req, res) {
        cards.create(req, res);
    });
    app.put('/card/:id', function (req, res) {
        cards.update(req, res);
    });
    app.delete('/card/:id', function (req, res) {
        cards.delete(req, res);
    });

};

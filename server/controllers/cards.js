var mongoose = require('mongoose');
var Card = mongoose.model('Card');

module.exports = {

    index: function (req, res) {
        Card.find({}, function(err, cards) {
            if (err) {
                console.log(err);
                res.json(err);
            }
            else {
                res.json(cards);
            }
        })
    },

    show: function (req, res) {
        Card.findById(req.params.id, function(err, card) {
            if (err) {
                console.log(err);
                res.json(err);
            }
            else {
                res.json(card);
            }
        })
    },

    create: function (req, res) {
        Card.create(req.body, function (err, card) {
            if (err) {
                console.log(err);
                res.json(err);
            }
            else {
                res.json(card);
            }
        });
    },

    update: function (req, res) {
        Card.findById(req.params.id, function (err, card) {
            if (err) {
                console.log(err);
                res.json(err);
            }
            else {
                card.title = req.body.title;
                card.subtitle = req.body.subtitle;
                card.formattedText = req.body.formattedText;
                card.image.imageUrl = req.body.image.imageUrl;
                card.buttons[0].title = req.body.buttons[0].title;
                card.buttons[0].openUriAction.uri =
                    req.body.buttons[0].openUriAction.uri;
                card.save(function (err, result) {
                    if (err) {
                        console.log(err);
                        res.json(err);
                    }
                    else {
                        res.json(result);
                    }
                });
            }
        })
    },

    delete: function (req, res) {
        Card.findByIdAndRemove(req.params.id, function(err, card){
            if (err) {
                console.log(err);
                res.json(err);
            }
            else {
                res.json(card);
            }
        });
    }

};

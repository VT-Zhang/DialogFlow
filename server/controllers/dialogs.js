var mongoose = require('mongoose');
var Dialog = mongoose.model('Dialog');

module.exports = {

    index: function (req, res) {
        Dialog.find({}, function(err, dialogs) {
            if (err) {
                console.log(err);
                res.json(err);
            }
            else {
                res.json(dialogs);
            }
        })
    },

    show: function (req, res) {
        console.log(req.params);
        Dialog.findById(req.params.id, function(err, dialog) {
            if (err) {
                console.log(err);
                res.json(err);
            }
            else {
                res.json(dialog);
            }
        })
    },

    create: function (req, res) {
        Dialog.create(req.body, function (err, dialog) {
            if (err) {
                console.log(err);
                res.json(err);
            }
            else {
                res.json(dialog);
            }
        });
    },

    update: function (req, res) {
        Dialog.findById(req.params.id, function (err, dialog) {
            if (err) {
                console.log(err);
                res.json(err);
            }
            else {
                dialog.title = req.body.title;
                dialog.subtitle = req.body.subtitle;
                dialog.formattedText = req.body.formattedText;
                dialog.image.imageUrl = req.body.image.imageUrl;
                dialog.buttons[0].title = req.body.buttons[0].title;
                dialog.buttons[0].openUriAction.uri =
                    req.body.buttons[0].openUriAction.uri;
                dialog.save(function (err, result) {
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
        Dialog.findByIdAndRemove(req.params.id, function(err, dialog){
            if (err) {
                console.log(err);
                res.json(err);
            }
            else {
                res.json(dialog);
            }
        });
    }

};

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

    delete: function (req, res) {
        console.log(req.params);
        console.log(req.params.id);
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

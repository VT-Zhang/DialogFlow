var mongoose = require('mongoose')
var Dialog = mongoose.model('Dialog')

module.exports = {

    create: function (req, res) {
        Dialog.create(req.body, function (err, user) {
            if (err) {
                console.log(err)
                res.json(err)
            }
            else {
                res.json(user)
            }
        });
    }

}

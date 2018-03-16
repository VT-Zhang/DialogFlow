var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');

module.exports = {

    login: function (req, res) {
        console.log(req.body);
        User.findOne({email: req.body.email}, function (err, user) {
            if (err) {
                console.log(err);
                res.json(err);
            }
            else if (!user) {
                res.json({errors: 'No account associated with this email.'});
            }
            else if (bcrypt.compareSync(req.body.password, user.password)) {
                res.json(user);
            }
            else {
                res.json({errors: 'Password is not right.'});
            }
        });
    },

    register: function (req, res) {
        console.log(req.body);
        if (req.body.password !== req.body.password_confirm) {
            res.json({errors: 'Passwords don\'t match.'});
        }
        else {
            if (req.body.password) {
                req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
            }
            User.create(req.body, function (err, user) {
                if (err) {
                    console.log(err);
                    res.json(err);
                }
                else {
                    res.json(user);
                }
            });
        }
    }
};

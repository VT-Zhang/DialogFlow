var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

var UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email can't be empty"],
        unique: [true, "Email has used, choose another email"],
        validate: {
            validator: function(value){
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            }, message: "Invalid email, please try again"
        }
    },
    first_name: {
        type: String,
        required: [true, "First Name can't be empty"],
        minlength: 2
    },
    last_name: {
        type: String,
        required: [true, "Last Name can't be empty"],
        minlength: 2
    },
    password: {
        type: String,
        required: [true, "Password can't be empty"],
        minlength: 8,
        validate: {
            validator: function(value){
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8}/.test( value );
            },
            message: "Password must contain at least 1 number, uppercase and special character"
        }
    }

}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
   }
);

mongoose.model("User", UserSchema);

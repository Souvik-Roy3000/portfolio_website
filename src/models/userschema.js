const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid mail id")
            }

        }
    },
    subject: {
        type: String,
        required: true,
        minLength: 3
    },

    message: {
        type: String,
        required: true,
        minLength: 3
    },
    time: { type: Date, default: Date.now }

});

const User = mongoose.model("User", userSchema);
module.exports = User;
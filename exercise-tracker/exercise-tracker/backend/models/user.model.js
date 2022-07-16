const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userScehma = new schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    timestamps: true
});

const User = mongoose.model('User', userScehma);

module.exports = User;
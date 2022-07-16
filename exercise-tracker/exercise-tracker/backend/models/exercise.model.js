const mongoose = require("mongoose");
const schema = mongoose.Schema;

const exerciseScehma = new schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true }
}, {
    timestamps: true
});

const Exercise = mongoose.model('Exercise', exerciseScehma);

module.exports = Exercise;
const mongoose = require('mongoose');

const habitSchema = mongoose.Schema({
    habName: {
        type: String,
        required: true,
        unique: true
    },
    habStatus: {
        type: Boolean,
        default: false
    },
    habStreak: {
        type: Number,
        default: 0
    },
    habEffort: {
        type: Number,
        default: 0
    }
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;

const mongoose = require('mongoose');

const challengeSchema =  mongoose.Schema({
    chalName:{
        type: String,
        required: true
    },
    chalType:{
        type: String,
        required: true
    },
    chalExpire:{
        type: Date,
        required: true
    },
    chalEventId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Habit'
    }
});

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = Challenge;

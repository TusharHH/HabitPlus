const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true
    },
    userPassword:{
        type: String,
        required: true
    },
    userEmail:{
        type: String,
        required: true,
        unique: true
    },
    token:{
        type: String
    },
    userDayTracker:{
        type: Array,
        default: []
    },
    userToDos:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    },
    userChallengeTracker:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Challenge'
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;

const mongoose = require('mongoose');

const task = {
    taskName: {
        type: String,
        required: true
    },
    taskDescription: {
        type: String,
    },
    taskDeadline: {
        type: Date,
    },
    taskEffort: {
        type: Number,
        default: 0
    }
}

const taskSchema = mongoose.Schema({
    taskList:{
        type: arr[mongoose.Schema.Types.ObjectId],
        ref: 'task'
    },
    subTasksList:{
        type: arr[mongoose.Schema.Types.ObjectId],
        ref: 'task'
    }
})

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;

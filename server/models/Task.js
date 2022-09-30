const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    text : {
        type : String,
        required: true
    },
    listId: {
        type: String, 
        required : true
    },
    completed : {
        type: Boolean, 
        required : true
    }
})

module.exports = Task
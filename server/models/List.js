const mongoose = require('mongoose')

const List = mongoose.model('List', {
    name : {
        type : String,
        required: true
    },
    colorId: {
        type: String, 
        required : true
    }
})

module.exports = List
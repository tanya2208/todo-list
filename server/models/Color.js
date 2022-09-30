const mongoose = require('mongoose')

const Color = mongoose.model('Color', {
    hex : {
        type : String,
        required: true
    }
})

module.exports = Color
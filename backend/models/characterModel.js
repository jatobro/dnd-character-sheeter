const mongoose = require('mongoose')

const characterSchema = mongoose.Schema(
    {   
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        name: {
            type: String,
            required: [true, 'Please pick a name for your character'],
        },
        race: {
            type: String,
            required: [true, 'Please pick a race for your character']
        },
        class: {
            type: String,
            required: [true, 'Please pick a class for your character']
        },
    }, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Character', characterSchema)
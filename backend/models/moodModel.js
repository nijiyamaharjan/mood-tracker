const mongoose = require('mongoose')

const Schema = mongoose.Schema

const moodSchema = new Schema({
    rating: {
        type: Number,
        required: true
    }, 
    emotion: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Mood', moodSchema)
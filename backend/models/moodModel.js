const mongoose = require('mongoose')

const Schema = mongoose.Schema

const moodSchema = new Schema({
    rating: {
        type: String,
        required: true
    }, 
    emotions: {
        type: Array,
        required: true
    },
    // hoursSlept: {
    //     type: Number,
    //     required: false
    // },
    note: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true
    }


}, { timestamps: true })

module.exports = mongoose.model('Mood', moodSchema)
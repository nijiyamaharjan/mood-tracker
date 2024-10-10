const Mood = require('../models/moodModel')
const mongoose = require('mongoose')

// get all mood
const getMoods = async (req, res) => {
  const moods = await Mood.find({}).sort({createdAt: -1})

  res.status(200).json(moods)
}

// get a single mood
const getMood= async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such mood'})
  }

  const mood = await Mood.findById(id)

  if (!mood) {
    return res.status(404).json({error: 'No such mood'})
  }

  res.status(200).json(mood)
}

// create a new mood
const createMood = async (req, res) => {
  const {rating, emotion} = req.body

  // add to the database
  try {
    const mood = await Mood.create({ rating, emotion })
    res.status(200).json(mood)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a mood
const deleteMood = async (req, res) => {
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such mood'})
  }

  const mood = await Mood.findOneAndDelete({_id: id})

  if(!mood) {
    return res.status(400).json({error: 'No such mood'})
  }

  res.status(200).json(mood)
}

// update a mood
const updateMood = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such mood'})
    }
  
    const mood = await Mood.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!mood) {
      return res.status(400).json({error: 'No such mood'})
    }
  
    res.status(200).json(mood)
}

module.exports = {
  getMood,
  getMoods,
  createMood,
  deleteMood,
  updateMood
}
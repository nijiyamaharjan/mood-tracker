require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const moodRoutes = require('./routes/moods')

const app = express()

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(express.json())
// routes
app.use('/api/moods', moodRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
// mongoose.connect('mongodb://localhost:27017/moodTracker')
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port 4000')
        })
    })
    .catch((error) => {
        console.log(error)
    })


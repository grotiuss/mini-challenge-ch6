require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const app = express()

//Import models
const UserInfo = require('./models/user_info')
const UserGameHistory = require('./models/user_game_history')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/register', async(req, res) => {
    const user_datas = await UserInfo.find({})
    res.render('user_register', {
        users : user_datas
    })
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

//Connection URI
const mongoURI = 'mongodb://' + process.env.MONGO_HOST + ':' + process.env.MONGO_PORT + '/' + process.env.MONGO_DB
//Connecting to MongoDB
mongoose.connect(mongoURI)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection Error'))


//Import models
const user_info = require('./models/user_info')

//Import controllers
const user_controllers = require('./controllers/user_controllers')

app.use('/api',user_controllers)

app.listen(process.env.PORT, () => {
    console.log(`Application is running on http://localhost:${process.env.PORT}`)
})
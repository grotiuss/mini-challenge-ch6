require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(process.env.PORT, () => {
    console.log(`Application is running on http://localhost:${process.env.PORT}`)
})
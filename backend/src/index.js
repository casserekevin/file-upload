const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()

//database connection
mongoose.connect('mongodb+srv://kevin:kevi1810@cluster0-nij8b.mongodb.net/files?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(routes)


app.listen(3000)
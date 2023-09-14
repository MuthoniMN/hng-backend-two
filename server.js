const express = require("express")
const app = express()
const mongoose = require("mongoose")
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json())

app.get('/api/:id', (req, res) => {
    let id = req.params.id
})

app.delete('/api/:id', (req, res) => {
    let id = req.params.id
})

app.put('/api/:id', (req, res) => {
    let id = req.params.id
})

const generateId = () => {
    return Math.max(...phoneBook.map((a) => a.id))++
}

app.post('/api/', (req, res) => {

})
app.listen(3333, () => console.log("We Running Hunnnaaaayyyyy"))

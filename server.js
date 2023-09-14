const express = require("express")
const app = express()
const mongoose = require("mongoose")
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const generateId = () => {
    return Math.max(...phoneBook.map((a) => a.id))++
}

const personSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    id:{
        type: Number
    }
  })

let Person = mongoose.model('Person', personSchema);

app.use(express.json())

app.get('/api/:id', (req, res) => {
    let id = req.params.id
    Person.findOne({
        id: id
      })
    .then((data) => res.json(data))
    .catch((err) =>  console.error(err))
})

app.delete('/api/:id', (req, res) => {
    let id = req.params.id
    Person.deleteOne({
        id: id
      })
    .then((data) => res.json(data))
    .catch((err) =>  console.error(err))
})

app.put('/api/:id', (req, res) => {
    let id = req.params.id
    let personName = req.body.name
    Person.findOneAndUpdate(
        {
            id: id
        },
        {
            name: personName
        },
        { new: true }
      )
      .then((data) => res.json(data))
      .catch((err) =>  console.error(err))
})

app.post('/api/', (req, res) => {
    let person = new Person({
        name: req.body.name,
        id: generateId(),
      })
      person.save((err, data) => {
        if(err) console.error(err)
        console.log("Saved!!!")
      })
})
app.listen(3333, () => console.log("We Running Hunnnaaaayyyyy"))

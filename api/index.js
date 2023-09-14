const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
require('dotenv').config()

app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
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
    .catch((err) => console.error(err))
})

app.delete('/api/:id', (req, res) => {
  let id = req.params.id
  Person.deleteOne({
    id: id
  })
    .then((data) => res.json(data))
    .catch((err) => console.error(err))
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
    .then((data) => res.json(data || "Person not found"))
    .catch((err) => console.error(err))
})

app.post('/api', (req, res) => {
  Person.countDocuments()
    .then(data => {
      let person = new Person({
        name: req.body.name,
        id: data + 1,
      })
      person.save()
      res.json(person)
    })
    .catch(err => console.error(err))
  
})
app.listen(process.env.PORT, () => console.log("We Running Hunnnaaaayyyyy"))

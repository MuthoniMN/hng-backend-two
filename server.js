const express = require("express")
const app = express()

app.use(express.json())
const phoneBook = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (req, res) => {
    res.json(phoneBook)
})

app.get('/info', (req, res) => {
    const currentTime = new Date()
    res.end(`<p>Phonebook has info of ${phoneBook.length} people.</p><p>${currentTime}<p>`)
})

app.get('/api/persons/:id', (req, res) => {
    let id = req.params.id
    res.end(phoneBook.find(contact => contact.id == id))
})

app.listen(3333, () => console.log("We Running Hunnnaaaayyyyy"))

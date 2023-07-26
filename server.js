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
    let phone = phoneBook.find(contact => contact.id == id)
    if (!phone) {
        return res.status(204).end()
    }else{
        res.json(phone)
    }
})

app.delete('/api/persons/:id', (req, res) => {
    let id = req.params.id
    res.json(phoneBook.filter(contact => contact.id != id))
})

const generateId = () => {
    let randomNum = Math.floor(Math.random() * 100)
    if(randomNum > Math.max(...phoneBook.map(a => a.id))){
        return randomNum
    }else{
        return generateId()
    }
}

app.post('/api/persons', (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            error: 'No Content'
        })
    } else if(req.body.name === "" || req.body.number === ""){
        return res.status(400).json({
            error: 'No Content'
        })
    }else {
        let newContact = {
            id: generateId(),
            name: phoneBook.filter(a => a === req.body.name).length === 0 ? req.body.name : res.status(400).json({
                error: 'Name should be unique'
            }),
            number: req.body.number
        }
        res.json(newContact)
    }
})

app.listen(3333, () => console.log("We Running Hunnnaaaayyyyy"))

const express = require("express")
const app = express()

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

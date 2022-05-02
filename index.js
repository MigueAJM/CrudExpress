const express = require('express')
const app = express()
const PORT = 3000

let notas = [
    {
        "id": 1,
        "content": "Simonaaaa",
        "date": "2021-05-30",
        "important": false
    },
    {
        "id": 2,
        "content": "Simonaaaa 2",
        "date": "2021-05-31",
        "important": false
    },
    {
        "id": 3,
        "content": "Simonaaaa 2",
        "date": "2021-05-31",
        "important": false
    },
    {
        "id": 4,
        "content": "Simonaaaa 2",
        "date": "2021-05-31",
        "important": false
    }
]

app.get('/', (req, res) => {
    res.send('Simonaaa')
})

app.get('/api/notas', (req, res) => {
    res.json(notas)
})

app.listen(PORT, () => {
console.log('server run')
})
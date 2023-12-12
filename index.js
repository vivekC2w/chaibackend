require('dotenv').config()
const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Twitter UserID: vivekhiray@23699');
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login at Chai Aur Code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai Aur Code</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${port}`);
})
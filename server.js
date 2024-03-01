// server.js

const express = require('express')
// create server
const app = express()

app.get('/user', async (req, res) => {
  res.send('hello node.js')
})

app.listen(3001, () => {
  console.log('http://localhost:3001')
})


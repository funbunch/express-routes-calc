const express = require('express')

const app = express()
const PORT = 8000

//create a home route
//define routes
app.get('/', (req, res) => {
  res.send("hello 🤪")
})

//add
app.get('/add/:x/:y', (req, res) => {
  const x = parseInt(req.params.x)
  const y = parseInt(req.params.y)
  res.send(`${x + y}`)
})

//subtract
app.get('/subtract/:x/:y', (req, res) => {
  const x = parseInt(req.params.x)
  const y = parseInt(req.params.y)
  res.send(`${x - y}`)
})

//multiple
app.get('/multiply/:x/:y', (req, res) => {
  const x = parseInt(req.params.x)
  const y = parseInt(req.params.y)
  res.send(`${x * y}`)
})

//divide
app.get('/divide/:x/:y', (req, res) => {
  const x = parseInt(req.params.x)
  const y = parseInt(req.params.y)
  res.send(`${x / y}`)
})

//listen on a port
app.listen(PORT, () => {
  console.log(`you are listening to the smooth sounds of port ${PORT}` )
})


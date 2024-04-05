const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).json({"status":"working"})
})

app.get('/about', (req, res) => {
  res.status(200).json({"status":"about us also working working","about":"developed by sachin thakur"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('This is a test');
  });

  app.get('/Cars', (req, res) => {
    res.send('This the car backend');
  });

app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})
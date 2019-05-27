const express = require('express')
const app = express();

app.use(express.static('public'));

app.listen(4000, () => {
  console.log('Server is now Working')
})

app.get('/', (reg, res) => {
  res.end('hello')
})

app.get('/cat', (reg, res) => {
  res.end('cat')
})
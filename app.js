const express = require('express')
const app = express()
const port = 3000

let bookLog = {}

app.use(express.json())

app.get('/booklog', (req, res) => {
  res.json({
    ok: true,
    booklog: [bookLog],
  })
})

app.post('/booklog', (req, res) => {
  bookLog = req.body

  if (!(bookLog.name && bookLog.text)) {
    return res.json({
      ok: false,
      error: 'invalid params',
    })
  }
  res.json({
    ok: true,
    booklog: bookLog,
  })
})

app.listen(port, () => {
  console.log(`App lisning at http://localhost:${port}`)
})

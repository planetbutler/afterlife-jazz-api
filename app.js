const express = require('express')
const app = express()
const port = 3000

app.get('/message', (req, res) => res.send({ message: 'Go Away!!'} ))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


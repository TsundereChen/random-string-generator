const express = require('express')
const app = express()
const crypto = require("crypto")

const address = '0.0.0.0'
const port = 3000

app.get('/', (req, res) => res.send(crypto.randomBytes(20).toString('hex') + '\n'))

app.listen(port, address, () => console.log(`App listening at http://${address}:${port}`))

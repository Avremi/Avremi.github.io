const fs = require('fs')

const express = require('express')
const app = express()
const port = 3000

var log_file = fs.createWriteStream(__dirname + '/debug.log', { flags: 'w' })
app.get('/', (req, res) => {
    console.log(req.headers["user-agent"])
    log_file.write(req.headers["user-agent"]+'\n')
    res.send('Hello World! from mi')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
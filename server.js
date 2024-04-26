const express = require('express')
const fs = require('fs')
const app = express()
app.use(express.json())
const port = 3000
const hostname = '127.1.1.1';
app.set('view engine', 'ejs')
app.use( express.static('./public'));

app.listen(port, hostname, () => {
    console.log(`Server listening on port ${port}`)
})

app.get(`/`, (req, res) => {
    res.render('index')
})

app.get(`/updatePlayerCsv`, (req, res) => {
    fs.readFile(`./homeroster.json`, 'utf-8', function(err,data) {
        jsonData = JSON.parse(data)
        res.send(jsonData)
     })
})


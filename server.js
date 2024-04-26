const express = require('express')
const fs = require('fs')
const app = express()
app.use(express.json())
const port = 3000
const hostname = '127.0.0.1';
app.set('view engine', 'ejs')
    

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   fs.createReadStream('index.html').pipe(res)
// });
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

app.get(`/`, (req, res) => {
    res.render('index')
})

app.get(`/updatePlayerCsv`, (req, res) => {
    fs.readFile(`./homeroster.json`, 'utf-8', function(err,data) {
        jsonData = JSON.parse(data)
        res.json(jsonData)
     })
})
// res.setHeader('Content-Type', 'text/html')
// res.status(200).send(
//     fs.createReadStream('index.html').pipe(res)
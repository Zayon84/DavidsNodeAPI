const { response } = require('express')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const https = require('https')


const instrument = { Instruments: [{"name": "Guitarr", "Kind": "string instrument"},
{"name" : "Piano", "kind": "PlingPong insturment"}, {"name": "violin"}, {"kind":"stroke ins"}]}


app.get("/joke", (req, res) =>{
    https.get("https://api.chucknorris.io/jokes/random", (response)=>{
        response.on('data', (data)=>{
            res.send(JSON.parse(data))
        })
    }).on("error", (err) => {
        console.log("there was an error" + err.message)
    })
})

app.get("/instrument", (req, res) => {
    res.send(instrument)
})

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html")
})


app.listen(PORT, () =>{
    console.log("listening to port " + PORT)
})
const express = require("express")
const Parv = express()

Parv.get("/" , (req,res) => {
    res.send("Hello World")
})
Parv.get("/parv", (req, res) => {
    res.send("Hello Parv")
})
Parv.listen(8000)
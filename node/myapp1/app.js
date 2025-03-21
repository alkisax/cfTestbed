const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
  console.log("get request")
  res.send ("hello express")
})

app.get("/about", (req,res) => {
  console.log("about page")
  res.send("this is the about page")
})

app.get("/help", (req, res) => {
  console.log("help page")
  res.send("this is the help page")
})

app.get("/user", (req, res) =>{
  let query = req.query

  let name = query.name
  let surname = query.surname
  let age = query.age

  console.log("query:", query)
  res.send(`Name ${name}, surname ${surname}, age ${age}`)
})

app.get("/user/:name/:surname/:age", (req,res) => {
    let params =  req.params
    console.log("params", params)
    let name = params.name
    let surname = params.surname
    let age = params.age
    res.send(`Name ${name}, surname ${surname}, age ${age}`)
})

app.listen(port, () => {
  console.log("server is up and running at 3000")
})

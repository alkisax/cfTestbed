const express = require('express')
const app = express()
const port = 3000

app.get ('/', (req,res) => {
  res.send("this is the home page")
})

app.get("/user", (req, res) =>{
  let query = req.query

  let name = query.name
  let surname = query.surname
  let age = query.age

  console.log("query:", query)
  res.send(`Name ${name}, surname ${surname}, age ${age}`)
})

app.post ('/user', (req,res) => {
  let data = req.body
  console.log(data);
  res.send("user page")
})


app.listen(port, () => {
  console.log("server running")  
})
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', express.static('files')) // ******

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
  let username = req.body.username
  let email = req.body.email
  console.log(data);
  res.send(`User data ${username}, ${email}`)
})

app.post ('/userForm', (req, res) => {
  let data = req.body
  console.log("Data", data)
  res.send("Userform page")  
})

app.use('/user1', (req, res) => {
  console.log("user 1")
  res.send("User 1 page")
})
app.use('/user2', (req, res) => {
  console.log("user 2")
  res.send("User 2 page")
})
app.use('/user2/hello', (req, res) => {
  console.log("user 2 hello")
  res.send("User 2 page hello")
})


app.listen(port, () => {
  console.log("server running")  
})
const express = require("express")
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs") //learn ejs //πρεπει ολα στον φάκελο views


app.get('/create', (req,res) => {
  console.log("create page")
  
  res.render('form', {}) //ποια σελιδα θελω να ανοιξει και δεν στέλνω ντατα
})

app.post('/user', (req,res) => {
  console.log("User post")
  let data = req.body
  console.log("Data", data)
  
  // res.send("Post page")
  let username = data.username
  let email = data.email

  res.render('user', {
    data1: username,
    data2: email
  })  
})

app.get('/users', (req, res) => {
  console.log("Users page")
  const users = [
    {
      "username": "markos",
      "email":"marka@aueb.gr"
    },
    {
      "username":"thanasis",
      "email":"thanasis@aueb.gr"
    }
  ]
  res.render("users", {
    users
  })
  
})

app.listen(port, () => {
  console.log("server is running on port 3000")
})
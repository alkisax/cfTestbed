import express from "express";
import { greet } from "./utils";

const app = express()
const port = 3000

app.get ('/', (req, res) => {
  res.send("Hello typescript")
})

app.get('/greetings', (req, res) => {
  const message = greet("WOrld 2")
  res.send(message)
})

app.listen(port, () => {
  console.log("server running at 3000");  
})
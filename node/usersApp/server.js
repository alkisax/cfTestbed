const mongoose = require ("mongoose")
const app = require('./app')
const port = 3000

mongoose.connect("")
  .then(
    () => {
      console.log("connection to mongoDB established");
      
    },
    err => { 
      console.log(" failed to connect to MongoDB", err);
    }
  )

app.listen(port, () => {
  console.log("server connected at port 3000")  
})


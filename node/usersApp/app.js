const express = require("express")
const app = express()

const user = require('./routes/user.routs')
app.use('/api/users', user)

module.exports = app
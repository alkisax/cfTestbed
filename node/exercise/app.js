const express = require('express')
const cors = require('cors')
const productRoutes = require('./routes/product.routes')

const app = express()

// Middleware
app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

// Routes
app.use('/api/products', productRoutes)

module.exports = app;
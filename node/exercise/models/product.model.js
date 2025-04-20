const mongoose = require("mongoose")
const Schema = mongoose.Schema
const productSchema = new Schema({
  product:{
    type: String,
    required: [true, 'product is required'],
    unique:true
  },
  cost:{
    type: Number,
    required: [true, 'cost is required']
  },
  description:{
    type: String,
    required: false
  },
  quantity:{
    type: Number,
    required: [true, 'quantity is required']
  },
},
{
  collection: 'products',
  timestamps: true
})
module.exports = mongoose.model('Product', productSchema)
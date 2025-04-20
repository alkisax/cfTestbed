const Product = require('../models/product.model')

exports.findAll = async (req,res) => {
  try {
    const results = await Product.find()
    res.status(200).json(results)
  } catch (error) {
    res.status(500).json({
      message: 'error  product controller findAll',
      error: error.message
    })
  }
}

exports.create = async (req,res) => {
  const newProduct = new Product({
    product: req.body.product,
    cost: req.body.cost,
    description: req.body.description,
    quantity: req.body.quantity
  })

  try {
    await newProduct.save()
    res.status(200).json({
      message: 'product added',
      product: newProduct
    })
  } catch (error) {
    res.status(500).json({
      message: 'product controller create error',
      error: error.message
    })
  }
}

exports.findOne = async (req, res) => {
  const productId = req.params.id

  try {
    const product = await Product.findById(productId)
    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving product by ID',
      error: error.message
    });
  }
}

exports.delete = async (req, res) => {
  const productId = req.params.id

  try {
    const product = await Product.findByIdAndDelete(productId)

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    res.status(200).json({ message: "Product deleted successfully" })
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting product',
      error: error.message
    })
  }
}

exports.update = async (req, res) => {
  const productId = req.params.id;
  const updateData = {
    product: req.body.product,
    cost: req.body.cost,
    description: req.body.description,
    quantity: req.body.quantity
  };

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updateData,
      {
        new: true,
        runValidators: true
      }
    )

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    })
  } catch (error) {
    res.status(500).json({
      message: "Error updating product",
      error: error.message,
    })
  }
}

const express = require('express')
const router = express.Router()
const productController = require('../controllers/product.controller')

router.get('/', productController.findAll)
router.post('/', productController.create)
router.get('/:id', productController.findOne)
router.delete('/:id', productController.delete)
router.patch('/:id', productController.update)

module.exports = router
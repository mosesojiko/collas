const express = require('express');
const { createProduct, getSingleProduct, getAllProducts} = require('../controllers/Product');
const verifyToken = require('../middlewares/verifyToken')
const router = express.Router();

//Create a product
router.post('/', verifyToken, createProduct)

//get specific product by a user
router.get('/:id',verifyToken, getSingleProduct)

//get all products 
router.get('/all',verifyToken, getAllProducts)


module.exports = router;
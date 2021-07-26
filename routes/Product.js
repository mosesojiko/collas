const express = require('express');
const { createProduct } = require('../controllers/Product')
const router = express.Router();

router.post('/', createProduct)

module.exports = router;
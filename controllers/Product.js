const Products = require('../models/Product');
const user = require('./User')

//create a product
const createProduct = async (req, res) =>{
    //create a user based on user schema
    let product = new Products({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        numberInStock: req.body.numberInStock,
        url: req.body.url,
        user: user._id
        
    })

   
        const saveProduct = await product.save();
        res.json({
            status: 200,
            success: true,
            saveProduct
        })
        console.log(saveProduct)

}

module.exports = { createProduct }
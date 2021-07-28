const Product = require('../models/Product');
const Products = require('../models/Product');
const user = require('./User')

//create a product
const createProduct = async (req, res) =>{
    //create a user based on user schema
   try {
    let product = new Products({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        numberInStock: req.body.numberInStock,
        url: req.body.url,
        user: req.user._id
        
    })

   
        const saveProduct = await product.save();
        res.json({
            status: 200,
            success: true,
            saveProduct
        })
        console.log(saveProduct)

   } catch (error) {
       console.log(error)
   }

}

//get single product by a users
const getSingleProduct = async (req, res) =>{
    try{
        let products = await Products.findOne({user: req.user._id, _id:req.params.id});
        res.json(products)
    }catch(err){
        res.status(400).json({
            error: err
        })
    }
}

//get all products by a user
const getAllProducts = async (req, res) =>{
    try {
      let all =  await Products.find({user: req.user._id})
      res.json({message: "List of your product.", all})

    } catch (error) {
        res.send(error)
    }

}



module.exports = { createProduct, getSingleProduct, getAllProducts }
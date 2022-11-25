const express = require('express');
const router = express.Router();
const {getProducts,getProductscart,addProductcart,putProduct,DeleteProduct}=require("../Controllers/Cart")

router.get('/products',getProducts)
router.get('/products-cart',getProductscart)
router.post('/products-cart',addProductcart)
router.put('/products-cart/:productId',putProduct)
router.delete('/products-cart/:productId',DeleteProduct)

module.exports=router;

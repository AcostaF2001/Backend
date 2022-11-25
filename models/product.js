const {model,Schema} = require("mongoose");

const ProductSchema = new Schema({
    name:{type:String, require:true,unique:true},
    img:{type:String,require:true},
    inCart:{type:Boolean, default:false},
    price:{type:Number,require:true}
})

module.exports=model("Product",ProductSchema);
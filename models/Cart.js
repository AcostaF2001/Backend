const {model,Schema} = require("mongoose");

const CartSchema = new Schema({
    name:{type:String, require:true,unique:true},
    img:{type:String,require:true},
    amount:{type:Number, require:true},
    price:{type:Number,require:true}
})

module.exports=model("Cart",CartSchema);
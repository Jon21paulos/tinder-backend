const mongoose=require('mongoose');

const cardSchema=mongoose.Schema({
    name:String,
    imgUrl:String
})

const Cards=mongoose.model('Cards',cardSchema);
module.exports=Cards;

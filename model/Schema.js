const mongoose=require('mongoose');
const Schema = mongoose.Schema;


const userorder= new Schema({
    name:{
          type:String,
          require:[true, 'Name field required']},
    model:{
            type:String},
    available:{
               type:Boolean,
               default:false},
    price:{
           type:Number,
           require:[true,'price field required']},
    description:{
                 type:String
    }
  


})

const user1 = mongoose.model('orders', userorder);


module.exports=user1;
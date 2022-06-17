
const express= require('express')
const router = express.Router()
const user1 = require('../models/Schema')

//get list of orders from database
router.get('/orders', (req,res)=>{
    res.send({type:'GET'})
});
 
//add a new order to database
router.post('/orders', (req,res)=>{
    user1.create(req.body).then((orders)=>{
     res.send(orders);
    });
});
 
//update orders in db
router.put('/orders:id', (req,res)=>{
    user1.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>{
        user1.findOne({_id:req.params.id}).then((orders)=>{
         res.send(orders);
        })
    })  
})

//removing orders from db
router.delete('/orders/:id', (req,res,next)=>{
    user1.findByIdAndRemove({_id:req.params.id}).then((orders)=>{
        res.send(orders)
    })
      
    
    })


    module.exports =router;
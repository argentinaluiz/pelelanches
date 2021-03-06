const express  = require('express');
const router = express.Router();

// import schema for operations
const Item = require('../model/peleItem.js')

// retrieving data from database    
router.get('/items', (req,res,next)=> {
   Item.find(function(err, items){
       if(err){
           res.json(err);
       }else{
           res.json(items)
       }
   });
});
 

// inserting new data
router.post('/item', (req, res, next)=> {
    let newPeleItem = new Item({
        selectedMesa: req.body.selectedMesa,
        selectedQtdeE: req.body.selectedQtdeE,
        selectedEat: req.body.selectedEat ,
        selectedQtdeD: req.body.selectedQtdeD,
        selectedDrink:   req.body.selectedDrink,
        totalCount:   req.body.totalCount       
    });
    newPeleItem.save((err, item)=>{
        if(err){
            res.json(err);
        }else{
            res.json({msg: 'Item adicionado com sucesso !'});            
        }
    });    
}); 

// updating the data
router.put('/item/:id', (req,res,next)=> {
    Item.findOneAndUpdate({_id: req.params.id},{
       $set:{
        selectedMesa: req.body.selectedMesa,
        selectedQtdeE: req.body.selectedQtdeE,
        selectedEat: req.body.selectedEat,
        selectedQtdeD: req.body.selectedQtdeD,
        selectedDrink:   req.body.selectedDrink,
        totalCount:   req.body.totalCount
       }      
    },
      function(err, result){
          if(err){
              res.json(err);
          }else{
              res.json(result);
          }
      });
});

// deleting the data
router.delete('/item/:id', (req,res,next)=> {
    Item.remove({_id: req.params.id}, function(err,result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});


module.exports = router;
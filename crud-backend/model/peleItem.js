const mongoose = require('mongoose');

const peleItemSchema = mongoose.Schema({
    
    selectedMesa: {
        type: Number,
        required: true
    },  
    selectedQtdeE: {
        type: Number,
        required: true
    },    
    selectedEat: {
        type: String,
        required: true
    },
    selectedQtdeD: {
        type: Number,
        required: true
    },
    selectedDrink: {
        type: String,
        required: true
    },
    totalCount: {
        type: Number,
        required: true
    }

}); 

const Item = module.exports =  mongoose.model('Item', peleItemSchema);  
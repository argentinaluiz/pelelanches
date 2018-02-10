const mongoose = require('mongoose');

const peleItemSchema = mongoose.Schema({
    
    itemSelectedMesa: {
        type: Number,
        required: true
    }, 
    itemSelectedQtde: {
        type: Number,
        required: true
    },
    
    itemSelectedLanche: {
        type: String,
        required: true
    },
    itemTotalBread: {
        type: Number,
        required: true
    },
    itemTotalCount: {
        type: Number,
        required: true
    }

});

const Item = module.exports =  mongoose.model('Item', peleItemSchema); 
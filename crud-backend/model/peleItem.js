const mongoose = require('mongoose');

const peleItemSchema = mongoose.Schema({
    
    selectedMesa: {
        type: Number,
        required: true
    },  
    selectedQtde: {
        type: Number,
        required: true
    },
    
    selectedLanche: {
        type: String,
        required: true
    },
    totalBread: {
        type: Number,
        required: true
    },
    totalCount: {
        type: Number,
        required: true
    }

});

const Item = module.exports =  mongoose.model('Item', peleItemSchema);  
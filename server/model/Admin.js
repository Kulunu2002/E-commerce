const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema({

    mainImg: {
        required: true,
        type: String
    },
    subImg1: {
        // required: true,
        type: String
    },
    subImg2: {
        // required: true,
        type: String
    },
    addPrice: {
        required: true,
        type: String
    },
    mainTitle: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    addBrand: {
        // required: true,
        type: String
    },
    addMaterial: {
        // required: true,
        type: String
    },
    addWeight: {
        required: true,
        type: String
    },
    category:{
        required:true,
        type:String
    }

});

const AddMin = mongoose.model('AddMin', adminSchema);

module.exports = AddMin;
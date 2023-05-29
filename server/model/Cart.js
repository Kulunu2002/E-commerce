const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema({

    cartImg: {
        type: String,
        required: true
    },
    cartTitle: {
        type: String,
        required: true
    },
    cartPrice: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    }

})

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
const express = require('express');
const { addCart, getCart, deleteCart } = require('../controllers/cart.controllers');
const auth = require('../middleware/auth')
const router = express.Router();

const CartRouter =router

CartRouter.post('/addCart',auth,addCart);
CartRouter.get('/getCart',auth,getCart);
CartRouter.delete('/deleteCart/:id' , deleteCart);

module.exports = CartRouter;
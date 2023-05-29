const Cart = require('../model/Cart')

const addCart = async (req, res) => {
    const cart = new Cart({ ...req.body, "owner": req.user._id });
    try {
        await cart.save();
        res.status(201).send(cart);
    } catch (error) {
        res.status(400).send(error)
    }
}

const getCart = async (req,res)=>{
    try {
        const carts = await Cart.find({ owner: req.user._id })
        res.status(200).send(carts);
    } catch (error) {
        res.status(400).send(error);
    }
}
const deleteCart = async (req,res)=>{
    try {
        const cart = await Cart.findByIdAndDelete({_id: req.params.id ,})
        if (!cart) {
            res.status(404).send()
        }
        res.status(200).send(cart)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {addCart , getCart ,deleteCart}
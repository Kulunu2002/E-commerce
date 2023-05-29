const express = require('express');
const {postProduct, getProduct ,getOneProduct } = require('../controllers/admin.controllers');
const router = express.Router();

const AdminRouter = router;

AdminRouter.post('/adminPost' , postProduct);
AdminRouter.get('/adminGet' , getProduct);
AdminRouter.get('/getProduct/:id',getOneProduct);


module.exports ={AdminRouter}
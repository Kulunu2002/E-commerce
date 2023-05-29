// require('../controllers/user.controllers');
const express = require('express');
const { postUser, getUser, logUser } = require('../controllers/user.controllers');
const router = express.Router();

const UserRouter = router;

UserRouter.post('/newUser' , postUser);
UserRouter.get('/findUser' , getUser);
UserRouter.post('/loginUser' , logUser)

module.exports = UserRouter;




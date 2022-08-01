const express = require('express');
const router = express.Router();
const passport=require('passport');

const postsController =require('../controllers/posts_controller');

router.post('/createpost' ,passport.checkAuthentication,postsController.create);


module.exports=router;
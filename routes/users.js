const express = require('express');
const router = express.Router();
const passport=require('passport');

const usersController = require('../controllers/users_controller');
// const postsController = require('../controllers/posts_controller');

router.get('/profile',passport.checkAuthentication, usersController.profile);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);
router.get('/destroySession', usersController.destroySession);

router.use('/posts', require('./posts') );


router.post('/create', usersController.create);
//use passport as a middleware
router.post('/create-session', passport.authenticate(
    'local',
{failureRedirect:'back'},
),usersController.createSession);


module.exports = router;
const express = require('express')
const router = express.Router();
const Blog = require('../models/Blog');
const User = require('../models/User');
const jwt = require('jsonwebtoken');


// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
  
    // incorrect email
    if (err.message === 'incorrect email') {
      errors.email = 'That email is not registered';
    }
  
    // incorrect password
    if (err.message === 'incorrect password') {
      errors.password = 'That password is incorrect';
    }
  
    // duplicate email error
    if (err.code === 11000) {
      errors.email = 'that email is already registered';
      return errors;
    }
  
    // validation errors
    if (err.message.includes('user validation failed')) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  }


  // create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'net ninja secret', {
    expiresIn: maxAge
  });
};






//@@ USER -> to get user
//@@ GET '/user/'
//@@ privet
router.get('/',(req,res)=>{
    const user = req.body;
    res.render('blog',{user})
})


//@@ Login -> to go login page
//@@ GET 'user/login'
//@@ public
router.get('/login',(req,res)=>{
    res.render('signin')
})

//@@ Register -> to go login page
//@@ GET 'user/register'
//@@ public
router.get('/register',(req,res)=>{
    res.render('signup')
})


//@@ Register -> to Reagister a new user
//@@ POST 'user/register'
//@@ public
router.post('/register',async(req,res)=>{
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } 
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }

});

//@@ Login -> to Login a  user
//@@ POST 'user/login'
//@@ public
router.post('/login', async(req,res)=>{
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } 
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
});


//@@ Logout -> to Logout a  user
//@@ GET 'user/register'
//@@ public
router.get('/logout',(req, res)=> {
    res.cookie('jwt', '', {maxAge : 1});
    res.redirect('/');
})

module.exports = router;

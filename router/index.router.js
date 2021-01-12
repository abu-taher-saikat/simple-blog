const express = require('express')
const router = express.Router();
const Blog = require('../models/Blog');

//@@ Index router to get home page
//@@ GET '/'
//@@ public
router.get('/',(req,res)=>{
    const user = req.body;
    res.render('index',{user})
})

//@@ Dashboard router to get home page
//@@ GET '/dashboard'
//@@ Privet
router.get('/dashboard',(req,res)=>{
    const user = req.body;
    res.render('dashboard',{user})
})



//@@ About -> to go about page
//@@ GET '/about'
//@@ public
router.get('/about',(req,res)=>{
    const user = req.body;
    res.render('about',{user})
})


//@@ Contact -> to go contact us page
//@@ GET '/contact'
//@@ public
router.get('/contact',(req,res)=>{
    const user = req.body;
    res.render('about',{user})
})




//@@ Login -> to go login page
//@@ GET '/login'
//@@ public
router.get('/login',(req,res)=>{
    const user = req.body;
    res.render('signin',{user})
})

//@@ Register -> to go login page
//@@ GET '/register'
//@@ public
router.get('/register',(req,res)=>{
    const user = req.body;
    res.render('signup',{user})
})




module.exports = router;
const express = require('express')
const router = express.Router();
const Blog = require('../models/Blog');
const User = require('../models/User')


//@@ USER -> to get user
//@@ GET '/user/'
//@@ privet
router.get('/',(req,res)=>{
    // const user = req.body;
    // res.render('blog',{user})
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
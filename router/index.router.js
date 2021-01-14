const express = require('express')
const router = express.Router();
const Blog = require('../models/Blog');

//@@ Index router to get home page
//@@ GET '/'
//@@ public
router.get('/', async(req,res)=>{
    let blogs = await Blog.find();
    // console.log(blogs);
    if(blogs){
        const user = req.user;
        res.render('index',{user , blogs })
    }else{
        res.redirect('/dashboard')
    }

})

//@@ Dashboard router to get home page
//@@ GET '/dashboard'
//@@ Privet
router.get('/dashboard',async (req,res)=>{
    const blog = await Blog.find({});

    try{
        console.log(typeof(blog));
        const numberOfBlog = blog.length;
        // console.log(blog.length);
        const user = req.body;
        res.render('dashboard',{user, numberOfBlog})
    }catch(err){
        console.log(err);
    }
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









module.exports = router;
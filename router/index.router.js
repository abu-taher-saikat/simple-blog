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
        res.render('index',{ blogs })
    }else{
        res.redirect('/dashboard')
    }
})

//@@ Dashboard router to get home page
//@@ GET '/dashboard'
//@@ Privet
router.get('/dashboard',async (req,res)=>{
    const blog = await Blog.find({});
    // console.log(blog);
    try{
        console.log(typeof(blog));
        const numberOfBlog = blog.length;

        res.render('dashboard',{blog, numberOfBlog})
    }catch(err){
        console.log(err);
    }
})



//@@ About -> to go about page
//@@ GET '/about'
//@@ public
router.get('/about',(req,res)=>{
    res.render('about')
})


//@@ Contact -> to go contact us page
//@@ GET '/contact'
//@@ public
router.get('/contact',(req,res)=>{
    res.render('contact')
})









module.exports = router;
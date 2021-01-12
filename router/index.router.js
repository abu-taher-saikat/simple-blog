const express = require('express')
const router = express.Router();

//@@ Index router to get home page
//@@ GET '/'
//@@ public
router.get('/',(req,res)=>{
    const user = req.body;
    res.render('index',{user})
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



//@@ Blog -> to go Blog page
//@@ GET '/blog'
//@@ public
router.get('/blog',(req,res)=>{
    const user = req.body;
    res.render('blog',{user})
})

//@@ CreateBlog -> to go create Blog page
//@@ GET '/createBlog'
//@@ public
router.get('/create',(req,res)=>{
    const user = req.body;
    res.render('createBlog',{user})
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
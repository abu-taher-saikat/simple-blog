const express = require('express')
const router = express.Router();
const Blog = require('../models/Blog');


//@@ Blog -> to go Blog page
//@@ GET '/blog'
//@@ public
router.get('/',(req,res)=>{
    res.render('blog',{user})
})





//@@ Post a Blog
//@@ POST '/blog/'
//@@ privet
router.post('/',async (req,res)=>{
    let blog = await new Blog({
        title : req.body.title,
        categories : req.body.categories,
        description : req.body.description,
    })

    console.log(blog);

    try{
        await blog.save();
        console.log(blog.id);
        res.redirect('/')
    }catch(err){
        console.log(err);
        res.redirect('/register')
    }
})


//@@ CreateBlog -> to go create Blog page
//@@ GET '/createBlog'
//@@ public
router.get('/create',(req,res)=>{
    const user = req.user;
    res.render('createBlog',{user})
})


//@@ EditBlog -> to go create Blog page
//@@ GET '/editBlog'
//@@ public
router.get('/editblog',(req,res)=>{
    const user = req.body;
    console.log(user);
    res.render('editBlog',{user})
})



//@@ Blog -> to go induvisual Blog page
//@@ GET '/blog/:id'
//@@ public
router.get('/:id',async (req,res)=>{
    
    let blog = await Blog.findById(req.params.id);
    try{
        console.log(blog);
        if(blog){
            const user = req.body;
            res.render('page',{user, blog})
        }else{
            res.redirect('/')
        }
    }catch(err){
        console.log(err);
    }
})



module.exports = router;
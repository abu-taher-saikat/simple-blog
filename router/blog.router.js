const express = require('express')
const router = express.Router();
const Blog = require('../models/Blog');


//@@ Blog -> to go Blog page
//@@ GET '/blog'
//@@ public
router.get('/',(req,res)=>{
    res.render('blog')
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
    res.render('createBlog')
})


//@@ EditBlog -> to go create Blog page
//@@ GET '/editBlog'
//@@ public
router.get('/editblog/:id',async(req,res)=>{
    let blog = await Blog.findById(req.params.id);
    console.log(blog);
    res.render('editBlog', {blog : blog})
});

//@@ EditBlog -> to go Upadate blog.
//@@ Put '/editBlog/:id'
//@@ privet
router.put('/editblog/:id',async (req,res)=>{
    req.blog = await Blog.findById(req.params.id);
    let blog = req.blog;
    blog.title = req.body.title;
    blog.categories = req.body.categories;
    blog.description = req.body.description;

    try{
        blog = await blog.save();
        // res.redirect(`blog/${blog.id}`,{blog});
        res.redirect('/')
    }catch(err){
        console.log(err);
        // res.render(`blog/editblog/${blog.id}`, {blog: blog})
    }
    // res.render('editBlog')
});

//@@ Delete a blog -> to delete a blog
//@@ Delete '/blog/:id'
//@@ privet
router.delete('/:id', async(req, res)=>{
    const blog = await Blog.findByIdAndRemove(req.params.id);
    res.redirect('/dashboard');
})



//@@ Blog -> to go induvisual Blog page
//@@ GET '/blog/:id'
//@@ public
router.get('/:id',async (req,res)=>{
    
    let blog = await Blog.findById(req.params.id);
    try{
        console.log(blog);
        if(blog){
            res.render('page',{blog})
        }else{
            res.redirect('/')
        }
    }catch(err){
        console.log(err);
    }
})



module.exports = router;
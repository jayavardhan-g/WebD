const express=require('express');
const router =express.Router();
const Blog = require('../models/blogSchema');
const fetchUser = require('../middleware');

router.get('/publicBlogs',async (req,res)=>{
    try{
        let blogs=await Blog.find({public:true}).lean();
        blogs.forEach((blog)=>{
            delete blog.user;
        })
        res.send({success:true,blogs});
    }catch(error){
        console.log("Error while trying to get blogs",error);
        res.send({success:false,error});
    }
});

router.post('/newBlog',fetchUser,async (req,res)=>{
    // let {title,tag,description,content} = req.body;
    // let success=true;
    // let errors=await validationResult(req);
    // console.log(errors);
    // if(errors.length){
    //     success=false;
    //     let err= errors.array();
    //     let er= err.map((element)=>{
    //         return element.path;
    //     })
    //     console.log("Errors in the validation")
    //     res.send({success,errors:er});
    //     return;
    // }
    try{
        console.log("body after fetching user",req.body);
        let {title,content,public}=req.body;
        let id= req.body.user.details.id;
        let tags =await req.body.tags.map((element)=>{
            return element;
        })
        console.log("tags",tags);
        // body after fetching user {
        //     email: 'jaya@gmail.com',
        //     name: 'jayavardhan',
        //     user: 'nani',
        //     title: 'daadtahaf',
        //     description: 'fdallfdjajdfkadfajdfalkjfdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkfdallfdjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkfdallfdjajdfkadfajdfkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
        //     author: 'Nanii',
        //     success: true,
        //     id: '64feed7b4235b415a4366907'
        //   }
        let blog= Blog({
            user:id,
            title,
            content,
            tags,
            public
        })
        blog.save();
        res.send({success:true,blog});
        return;
    }catch(error){
        success=false;
        console.log("Errors in saving")
        res.send({success,error})
        return;
    }
});

router.get('/blog/:id',fetchUser,async(req,res)=>{
    try{
        // console.log(Jayavardhan);
        let blog= await Blog.findById(req.params.id).lean();
        console.log(req.body.user.is);
        if(req.body.user.is){
            let edit;
            if(blog.user===req.body.user.details.id){
                edit= true;
            }else{
                edit=false;
            }
        }else{
            edit=false;
        }
        res.send({success:true, blog, edit})
    }catch(error){
        res.send({success:false, error,edit});
    }
})

module.exports=router;
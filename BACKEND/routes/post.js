var express = require('express');
var router = express.Router();
const User = require('../models/usermodel');
const Student = require('../models/studentmodel');
const HOD = require('../models/hodmodel');
const TPO = require('../models/tpomodel');
const POSTS = require('../models/postmodel');

router.get('/', function(req, res, next) {
    res.send('respond with a resource:users');
  });

//POST Notification
  
router.post('/sendpost', (req, res) => {
    var now=new Date();
    
    var post = new POSTS();
    post.postedby = req.body.postedby;
    post.postedon = now;
    post.title = req.body.title;
    post.content = req.body.content;
    post.year=req.body.year;
    post.dept=req.body.dept;
    post.prole=req.body.prole;
    console.log(post);
    post.save(function(err,result){
      if(err)
      {
        console.log(result);
        res.json({"error":err});
        }
      else{
        console.log(" posted successfully...");
        res.json({msg:"posted successfully",result:result});
    }
  });
  });
  
  //GET Notification
  
  router.get('/postsforstudents/:dept/:year',function(req,res)
   {
     var quary= {$and:[{$or:[ {dept:req.params.dept},{dept:'all'}]},{$or:[{year:req.params.year},{year:'all'}]}]};

    POSTS.find(quary,function(err,posts){
        if(err){
            return res.json({"error":err});}
            else{
            //console.log(posts);
            return res.json(posts);
            }
   });});

router.get('/postsforhods/:dept',function(req,res)
{
    var quary= {$or:[ {dept:'all'},{dept:req.params.dept}]};
    POSTS.find(quary,function(err,posts){
        if(err){
            return res.json({"error":err});}
            else{
            //console.log(posts);
            return res.json(posts);
            }
    });
});

router.get('/postsfortpos',function(req,res)
{
    var quary = {prole:'tpo'};
    POSTS.find(quary,function(err,posts){
        if(err){
            return res.json({"error":err});}
            else{
            //console.log(posts);
            return res.json(posts);
            }
    });
});
  
  //GET Notification By Year
  
  router.get('/viewposts/:dept/:year',function(req,res)
   {
             
    POSTS.find({year:req.params.year,dept:req.params.dept},function(err,posts){
        if(err){
            return res.json({"error":err});}
            else{
            return res.json({"output":posts})
            }
   });
  });
  
  //GET Notification By Role
  
  router.get('/postsbyrole/:dept/:year/:role',function(req,res)
   {
    var quary= {$and:[{$or:[ {dept:req.params.dept},{dept:'all'}]},{$or:[{year:req.params.year},{year:'all'}]},{prole:req.params.role}]};
    POSTS.find(quary,function(err,posts){
        if(err){
            return res.json({"error":err});}
            else{
            return res.json(posts)
            }
   });
  });
  

module.exports = router;

    const express=require("express");
const router=express();
const User=require("../models/user");
router.get("/",(req,res)=>{
    User.find()
        .then(users=>res.json(users))
        .catch(err=>res.status(400).json(err))
})
router.post("/",(req,res)=>{
    const username=req.body.username;
    const newUser=new User({username});
    newUser.save()
        .then(user=>res.status(200).json(user))
        .catch(err=>res.status(400).json(err))
})
module.exports=router;
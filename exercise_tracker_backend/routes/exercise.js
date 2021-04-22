const express=require("express");
const router=express();
const Exercise=require("../models/exercise");
router.get("/",(req,res)=>{
    Exercise.find()
        .then(exercises=>res.status(200).json(exercises))
        .catch(err=>res.status(400).json("Something went wrong",err))
})
router.post("/",async(req,res)=>{
    const newExercise=new Exercise(req.body);
    console.log(newExercise)
    newExercise.save()
        .then((exe)=>res.status(200).json(exe))
        .catch((err)=>res.status(400).json(err))
})
router.put("/:exerciseId",async(req,res)=>{
        const exercise=await Exercise.findById(req.params.exerciseId);
        exercise.username=req.body.username;
        exercise.date=Date.parse(req.body.date);
        exercise.description=req.body.description,
        exercise.duration=Number(req.body.duration);
        exercise.save()
            .then((exe)=>res.status(200).json(exe))
            .catch((err)=>res.status(400).json(err))
    })
router.get("/:exerciseId",async(req,res)=>{
    const exercise=await Exercise.findById(req.params.exerciseId);
    res.status(200).json(exercise);
})
router.delete("/:exerciseId",async(req,res)=>{
    Exercise.findByIdAndDelete(req.params.exerciseId)
        .then(()=>res.status(200).json('Exercise Delete'))
        .catch((err)=>res.status(400).json(err))
})
module.exports=router;
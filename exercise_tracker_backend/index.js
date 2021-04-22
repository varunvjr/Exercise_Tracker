require("./models");
const cors=require("cors");
const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const PORT=8000;
const userRoutes=require("./routes/users");
const exerciseRoutes=require("./routes/exercise");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use("/users",userRoutes);
app.use("/exercises",exerciseRoutes);

app.get("/",(req,res)=>{
    res.send("Welcome to Exercise Tracker Server");
})

app.listen(PORT,()=>{
    console.log(`Server started at post ${PORT}`);
})
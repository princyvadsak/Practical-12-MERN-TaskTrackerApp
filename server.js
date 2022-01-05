const taskModel = require("./models/task");
const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;
const mongoose = require("mongoose");

mongoose
.connect(
   "mongodb://localhost:27017/TaskTrackerApp"
)
.then(() => console.log("mongo db connected"));


//get list of all users
// app.get("/api/list",async(req,res) =>{
//    const userList = await userModel.find({},{username:true});
//    if(userList.length === 0){
//        return res.json({data : "no users in fullstack"});
//    }
//    return res.json({data :userList});
// });


//Register user
app.post("/api/addTask",(req,res) => {
    const newTask  = req.body;
    taskModel.create(newTask);
    return res.json({data : "add task successfully"});
});
app.delete("/api/deleteTask/:id",async(req,res) => {
    const taskid = req.params.id;
    const deleteData = await taskModel.findOneAndDelete({_id:taskid});
    if(deleteData){
        return res.json({data:"Delete Task Successfully",deleted:deleteData});
    }
    else{
        return res.json({data:"Task Not Delete"});

    }
         
});



app.put("/api/toggleReminder/:id/:reminder", async (req,res)=>{
    const tid = req.params.id;
    var rem;
    if(req.params.reminder.toString() == "true"){
         rem = false;
    }
    else{
         rem = true;
    }

        const updateData = await taskModel.findOneAndUpdate(
            {_id: tid},
            {reminder: rem},
            {new:true}
        ); 
    
        if(updateData){
            return res.json({data:"Task Reminder Update Successfully",Update : updateData});
        }
            return res.json({data:"No Task Data Found"});
        
    
});



app.get("/api/displayTask",async(req,res) => {
    const taskData = await taskModel.find();
    if(taskData){
        return res.json({data:taskData});
    }
    return res.json({data:"No Data Found"});
});
//app.post("/api/userdata",async(req, res) => {
//    const user = await userModel.findOne({username:req.body.username});

//    if(user){
//        return res.json({data:user});
//    }
//    return res.json ({data:`${req.body.username} Not Found`});
//});


app.listen(port, () => {
    console.log('Server running on port 5000');
});


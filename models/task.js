const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
   task:String,
   day:String,
   reminder : Boolean,
});

const taskModel = mongoose.model("task",taskSchema,"task");

module.exports = taskModel;
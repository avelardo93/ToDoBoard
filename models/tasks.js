var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type:String,
    required:true
  },
  date: {
    type:String,
    required:true
  },
  description: {
    type:String,
    required:true
  },
});

var Task = mongoose.model('Task', TaskSchema);
console.log("Task Schema Loaded");
module.exports = Task;
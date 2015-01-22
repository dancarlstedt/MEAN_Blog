var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
    description: String,
    dueDate: {
        type: Date,
        default: Date.now
    },
    isComplete: Boolean
});

mongoose.model('Todo', ToDoSchema);
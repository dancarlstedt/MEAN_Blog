var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
    description: String,
    dueDate: {
        type: Date,
        default: Date.now
    },
    isComplete: {type: Boolean, default: false}
});

mongoose.model('Todo', ToDoSchema);
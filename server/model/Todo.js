const { Schema, model } = require("Mongoose");

const ToDoSchema = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: true }
});

const Todo = model('todo', ToDoSchema);

module.exports = Todo;
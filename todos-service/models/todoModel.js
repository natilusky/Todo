import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
}, {
  timestamps: true
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo
import Todo from '../models/todoModel.js';

export const createTodo = async (description, deadline) => {
  let todo = new Todo({
    description,
    deadline,
  });

  return await todo.save();
};

export const getTodos = async () => {
  return await Todo.find({});
};

export const getTodo = async (id) => {
  return await Todo.findById(id);
};

export const updateTodo = async (id, updatedTodo) => {
  return await Todo.findByIdAndUpdate(id, updatedTodo, { new: true });
};

export const deleteTodo = async (id) => {
  return await Todo.findByIdAndDelete(id);
};

export const getTodosByDateRange = async (fromDate, toDate) => {
    return await Todo.find({
      deadline: {
        $gte: new Date(fromDate),
        $lte: new Date(toDate)
      }
    });
  };
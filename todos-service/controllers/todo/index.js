import * as todoService from '../../services/todoService.js';
// import { publishToQueue } from '../../rabbitmq/publisher.js';

export const createTodo = async (req, res) => {
  const todo = await todoService.createTodo(req.body.description, req.body.deadline);
  // await publishToQueue('todos', JSON.stringify({ todoId: todo._id, deadline: todo.deadline, type: 'create' }));
  res.send(todo);
};

export const getTodos = async (req, res) => {
  const todos = await todoService.getTodos();
  res.send(todos);
};

export const getTodo = async (req, res) => {
  const todo = await todoService.getTodo(req.params.id);
  res.send(todo);
};

export const updateTodo = async (req, res) => {
  const todo = await todoService.updateTodo(req.params.id, req.body);
  // await publishToQueue('todos', JSON.stringify({ todoId: todo._id, deadline: todo.deadline, type: 'update' }));
  res.send(todo);
};

export const deleteTodo = async (req, res) => {
  await todoService.deleteTodo(req.params.id);
  // await publishToQueue('todos', JSON.stringify({ todoId: req.params.id, type: 'delete' }));
  res.status(200).send({ message: 'Todo deleted successfully.' });
};

export const getTodosByDateRange = async (req, res) => {
    const { fromDate, toDate } = req.query;
    const todos = await todoService.getTodosByDateRange(fromDate, toDate);
    res.send(todos);
  };
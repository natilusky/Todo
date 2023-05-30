import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import { createTodo, getTodos, getTodo, updateTodo, deleteTodo, getTodosByDateRange }  from '../controllers/todo/index.js'

const todoRouter = Router()

// Create a new Todo
todoRouter.post('/', asyncHandler(createTodo));

// Get all todos
todoRouter.get('/', asyncHandler(getTodos));

// Get a single todo
todoRouter.get('/:id', asyncHandler(getTodo));

// Update a todo
todoRouter.put('/:id', asyncHandler(updateTodo));

// Delete a todo
todoRouter.delete('/:id', asyncHandler(deleteTodo));

// Get todos within a date range
todoRouter.get('/daterange', getTodosByDateRange);


export default todoRouter
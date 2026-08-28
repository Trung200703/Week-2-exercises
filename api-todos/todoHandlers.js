const ToDos = require("./todoLib");


// GET ALL
const getAllTodos = (req, res) => {
    const todos = ToDos.getAll();

    res.json(todos);
};


// CREATE
const createTodo = (req, res) => {
    const { task, completed, dueDate } = req.body;

    const newTodo = ToDos.addOne(
        task,
        completed,
        dueDate
    );

    if (newTodo) {
        res.json(newTodo);
    } else {
        res.status(500).json({
            message: "Failed to create todo"
        });
    }
};


// GET BY ID
const getTodoById = (req, res) => {
    const todoId = req.params.todoId;

    const todo = ToDos.findById(todoId);

    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({
            message: "Todo not found"
        });
    }
};


// UPDATE
const updateTodo = (req, res) => {
    const todoId = req.params.todoId;

    const updatedTodo = ToDos.updateOneById(
        todoId,
        req.body
    );

    if (updatedTodo) {
        res.json(updatedTodo);
    } else {
        res.status(404).json({
            message: "Todo not found"
        });
    }
};


// DELETE
const deleteTodo = (req, res) => {
    const todoId = req.params.todoId;

    const deleted = ToDos.deleteOneById(todoId);

    if (deleted) {
        res.json({
            message: "Todo deleted successfully"
        });
    } else {
        res.status(404).json({
            message: "Todo not found"
        });
    }
};


// EXPORT
module.exports = {
    getAllTodos,
    createTodo,
    getTodoById,
    updateTodo,
    deleteTodo
};

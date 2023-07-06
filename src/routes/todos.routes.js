const {Router} = require("express");
const ToDoList = require("../models/toDoList.model");
const {getAllToDos, getToDosById, createToDos, updateToDos, deleteToDos} = require("../controllers/todos.controllers");

const router = Router();

//! ************* READ ************

router.get('/todos', getAllToDos );

//! ************* FIND BY ID ************

router.get("/todos/:id", getToDosById);

//! ************* CREATE ************

router.post('/todos', createToDos);

//! ************* UPDATE ************

router.put("/todos/:id", updateToDos);

//! ************* DELETE ************

router.delete("/todos/:id", deleteToDos);


module.exports = router;
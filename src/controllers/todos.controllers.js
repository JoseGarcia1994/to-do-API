const ToDoList = require("../models/toDoList.model");

const getAllToDos = async (req, res) => {
    try {
        // TODO search all users
        const toDoList = await ToDoList.findAll();

        // TODO respond to user
        res.json(toDoList);
    } catch {
        res.status(400).json(error);
    }
};

const getToDosById = async (req, res) => {
    try {
        // TODO get route id
        const { id } = req.params;

        // TODO query the DB
        const toDoList = await ToDoList.findByPk(id);

        // TODO respond to user
        res.json(toDoList);

    } catch (error) {
        res.status(400).json(error);
    }
};

const createToDos = async (req, res) => {
    // try | catch is exception handling
    try {
        // TODO obtain info from body
        const newToDoList = req.body;

        // TODO create with the information obtained
        await ToDoList.create(newToDoList); // * {email: 'lsadkjfdskl', password: 'ldkfasdkljf'}

        // TODO respond that the action has been performed.
        // por defecto se envia status 200
        res.status(201).send();
    } catch {
        // catch error
        res.status(400).json(error);
    }
};

const updateToDos = async (req, res) => {
    try {
        // will only be allowed to modify the title, description, completed
        // TODO obtain id from to do
        // TODO obtener body with the information
        const { id } = req.params;
        // const todoInfo = req.body;
        const { title, description, completed } = req.body;

        // todo relizar la consulta para actualizar
        // * respond a number ( the number of rows changed )
        const toDoList = await ToDoList.update(
            { title, description, completed },
            {
                where: { id }, // --> shorthand { id: id }
            }
        );
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }
};

const deleteToDos = async (req, res) => {
    try {
        // todo get route id
        const { id } = req.params;
        // todo delete from the db
        await ToDoList.destroy({
            where: { id }, // -> {id: id}
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    getAllToDos,
    getToDosById,
    createToDos,
    updateToDos,
    deleteToDos,
}
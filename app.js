const express = require("express");
const db = require("./utils/database");
const ToDoList = require("./models/toDoList.model");
require('dotenv').config();

ToDoList;

const PORT = process.env.PORT ?? 8000;

db.authenticate()
  .then(() => {
    console.log('database connected succesfully');
  })
  .catch(err => console.log(err))

db.sync() // This creates the table if it doesn't exist (and does nothing if it already exists)
  .then(() => console.log('database syncronized'));

const app = express();

app.use(express.json());

//******************** CRUD ********************

//! ************* CREATE ************

app.post('/todos', async (req, res) => {
  // try | catch es un manejo de excepciones 
  try {
    // TODO obtain info from body
    const newToDoList = req.body;

    // TODO mandar a crear con la informacion obtenida
    await ToDoList.create(newToDoList); // * {email: 'lsadkjfdskl', password: 'ldkfasdkljf'}

    // TODO responder que se ha realizado la acción.
    // por defecto se envia status 200
    res.status(201).send();
  } catch {
    // atrapar el error
    res.status(400).json(error);
  }
});

//! ************* READ ************

app.get('/todos', async (req, res) => {
  try {
    // TODO Mandar a buscar a todos los usuarios
    const toDoList = await ToDoList.findAll();

    // TODO Responder al cliente
    res.json(toDoList);
  } catch {
    res.status(400).json(error);
  }
});

//! ************* FIND BY ID ************

app.get("/todos/:id", async (req, res) => {
  try {
      // TODO obtener el id de la ruta
      const { id } = req.params;

      // TODO realizar la consulta a la BD
      const toDoList = await ToDoList.findByPk(id);

      // TODO Responder al cliente
      res.json(toDoList);

  } catch (error) {
      res.status(400).json(error);
  }
});

//! ************* UPDATE ************

app.put("/todos/:id", async (req, res) => {
  try {
      // will only be allowed to modify the title, description, completed
      // TODO obtener el id del todo
      // TODO obtener el body con la información
      const { id } = req.params;
      // const todoInfo = req.body;
      const { title, description, completed } = req.body;

      // todo relizar la consulta para actualizar
      // * responde un numero ( la canitdad de filas modificadas )
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
});

//! ************* DELETE ************

app.delete("/todos/:id", async (req, res) => {
  try {
      // todo obtener el id de la ruta
      const { id } = req.params;
      // todo eliminar en la base de datos
      await ToDoList.destroy({
          where: { id }, // -> {id: id}
      });
      res.status(204).send();
  } catch (error) {
      res.status(400).json(error);
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to my server");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

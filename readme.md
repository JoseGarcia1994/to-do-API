	1. Create a new directory (folder) for your project
	
	2. Initialize the project with npm
	• npm init -y
	
	3. Instal express
	• npm install express

	4. Create an app in express and it consists of a single file called app.js
	
		a. Import Express
		b. Creating an express application
		c. We serve a get request on the root path
		d. Make our server listen to all the requests that are made
			○ app.listen(8000, () => {
				console.log('Server running on the port 8000');
			});
	
	5. Running the Server

    ## Sequelize

    1. Install Sequelize
	npm install sequelize
	
	2. You'll also have to manually install the driver for your database of choice:
	npm install --save pg pg-hstore # Postgres
	
	3. Connecting to a database
	To connect to the database, you must create a Sequelize instance. This can be done by either passing the connection parameters separately to the Sequelize constructor or by passing a single connection URI:
	
		○ Create a new carpet named utils
		○ Create a file under utils database.js
		
	4. Create a new instance ---> database.js
	
	const { Sequelize } = require('sequelize');
	
	
	const db = new Sequelize({
	    host: '',
	    database: '',
	    port: '',
	    username: '',
	    password: '',
	    dialect: ''
	});
	
	5. Export instance 
	Module.exports = db;
	
	6. Test connection to database
	You can use the .authenticate() function to test if the connection is OK:
	In app.js import instance created
	Use method authenticate
	
	const db = require("./utils/database");
	
	db.authenticate()
	    .then(() => {
	        console.log('Database connected successfully');
	    })
    .catch(err => console.log(err))

    ##Models

    1. Create carpet models

	2. Create a file name todolist.models.js

	3. Import Datatypes to file todolist.models.js
	const { DataTypes } = require('sequelize');
	
	4. Import instance to file todolist.models.js
	const db = require('../utils/database');
	
	5. Create Table
	const ToDoList = db.define('to_do_list_db', {
	    id: {
	        type: DataTypes.INTEGER,
	        primaryKey: true,
	        autoIncrement: true,
	    },
	    title: {
	        type: DataTypes.STRING(50),
	        defaultValue:  'New task',
	    },
	    description: {
	        type: DataTypes.STRING(200),
	        defaultValue:  'Task description',
	    },
	    completed: {
	        type: DataTypes.BOOLEAN,
	    },
	});
	
	6. Export model
	module.exports = ToDoList;
	
	7. Model Synchronization in app.js
	db.sync() // This creates the table if it doesn't exist (and does nothing if it already exists)
	  then(() => console.log('database syncronized'));
	
	8. Import to app.js
	const ToDoList = require("./models/toDoList.model");
	
ToDoList;
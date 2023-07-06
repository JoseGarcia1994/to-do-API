const { DataTypes } = require('sequelize');
const db = require('../utils/database');

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

module.exports = ToDoList; 
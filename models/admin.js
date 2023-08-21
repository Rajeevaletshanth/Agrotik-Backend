const Sequelize = require('sequelize');
const database = require('../config/db_connect');

const Admin = database.define('admin', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },       

        username:{
            type: Sequelize.STRING,
            allowNull: false,
        },

        address:{
            type: Sequelize.STRING,
        },

        authority:{
          type: Sequelize.STRING,
          allowNull: false,
        },

        phone_no:{
          type: Sequelize.STRING,
        },

        email:{
          type: Sequelize.STRING,
          allowNull: false,
        },

        password:{
          type: Sequelize.STRING,
          allowNull: false,
        },

        avatar:{
          type: Sequelize.STRING
        },

        is_deleted:{
          type: Sequelize.BOOLEAN
        },

        createdAt: {
            type: Sequelize.DATE,
            field: 'created_at'
        },
    
        updatedAt: {
            type: Sequelize.DATE,
            field: 'updated_at'
        }
    }, {
    freezeTableName: true
});

module.exports= Admin;
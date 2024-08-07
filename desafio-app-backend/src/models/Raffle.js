const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('raffle_db', 'admin', 'test1234', {
    host: 'localhost',
    dialect: 'postgres'
});

const Raffle = sequelize.define('Raffle', {
    number: {
        type: DataTypes.INTEGER, 
        unique: true, 
        allowNull: false
    },
    purchased: {
        type: DataTypes.BOOLEAN, 
        defaultValue: false
    },
    user: {
        type: DataTypes.STRING
    }
});
module.exports = {sequelize, Raffle};
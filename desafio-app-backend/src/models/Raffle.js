const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('raffle_db', 'admin', 'test1234', {
    host: 'localhost',
    dialect: 'postgres'
});

const Raffle = sequelize.define('Raffle', {
    number: {type: Sequelize.INTEGER, unique: true, allowNull: false},
    purchased: {type: Sequelize.BOOLEAN, defaultValue: false},
    user: {type: Sequelize.STRING}
});
module.exports = {sequelize, Raffle};
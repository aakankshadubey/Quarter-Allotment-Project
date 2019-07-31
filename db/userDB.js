const sequelize = require('sequelize')
const db = require('./dbConnectionSetup').db

const users = db.define('user_db', {
    username: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    password: {
        type: sequelize.STRING,
        allowNull: false
    },
},
{timestamps: false}
)


exports = module.exports = {
    users
}
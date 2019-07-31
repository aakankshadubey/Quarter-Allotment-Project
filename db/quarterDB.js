const sequelize = require('sequelize')
const db = require('./dbConnectionSetup').db

const quarters = db.define('quarter_db', {
    number: {
        type: sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true

    }
})

exports = module.exports = {
    quarters
}
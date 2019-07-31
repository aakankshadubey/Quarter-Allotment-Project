const sequelize = require('sequelize')
const db = require('./dbConnectionSetup').db

const applicantStatus = db.define('applicant_status_db', {
    username : {
        type: sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    employeeId: {
        type: sequelize.INTEGER,
        allowNull: false,
        unique: true

    },
    department: {
        type: sequelize.STRING,
        allowNull: false
    },
    designation: {
        type: sequelize.STRING,
        allowNull: false
    },
    status: {
        type: sequelize.INTEGER
    }
})

exports = module.exports = {
    applicantStatus
}
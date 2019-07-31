const sequelize = require('sequelize')
const db = require('./dbConnectionSetup').db

const applicants = db.define('applicants_db', {
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
    sex: {
        type: sequelize.STRING,
        allowNull: false
    },
    fatherName: {
        type: sequelize.STRING,
    },
    motherName: {
        type: sequelize.STRING,
    },
    dob: { 
        type: sequelize.DATEONLY,
        allowNull: false
    },
    address: {
        type: sequelize.STRING,
        allowNull: false
    },
    state: {
        type: sequelize.STRING,
        allowNull: false
    },
    zip: { 
        type: sequelize.INTEGER,
        allowNull: false
    },
    contactNumber: { 
        type: sequelize.BIGINT(11),
        allowNull: false
    },
    emailId: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true

    },
    aadhaarNumber: { 
        type: sequelize.BIGINT(11),
        allowNull: false,
        unique: true

    },
    panNumber: { 
        type: sequelize.BIGINT(11),
        allowNull: false,
        unique: true

    },
    designation: {
        type: sequelize.STRING,
        allowNull: false
    },
    fatherContactNumber: { 
        type: sequelize.BIGINT(11)
    },
   
    motherContactNumber: { 
        type: sequelize.BIGINT(11)
        },
 
    maritalStatus: { 
        type: sequelize.INTEGER,
        allowNull: false
    },
    spouseName: {
        type: sequelize.STRING
    }

})

exports = module.exports = {
    applicants
}
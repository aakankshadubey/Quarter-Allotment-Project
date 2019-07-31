const sequelize = require('sequelize')

const db = new sequelize(
    'aai',
    'aai_user',
    'aai_pass',

    {
        dialect: 'mysql',
        host: 'localhost'
    }
)

exports = module.exports = {
    db
}
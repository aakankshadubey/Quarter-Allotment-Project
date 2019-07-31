const db = require('./dbConnectionSetup').db
const hrUsers = require('./hrDB').hrUsers
const users = require('./userDB').users
const qaUsers = require('./qaDB').qaUsers
const applicants = require('./applicantDB').applicants
const applicantStatus = require('./applicantStatusDB').applicantStatus
const quarters = require('./quarterDB').quarters


db.sync().then(() => {
    console.log('Database Is Ready')
})

exports = module.exports = {
    db, 
    users,
    hrUsers,
    qaUsers,
    applicants,
    applicantStatus,
    quarters

}
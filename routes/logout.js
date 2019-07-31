const route = require('express').Router()
const session = require('express-session')

route.get('/', (req, res) => {
    var session = req.session
    session.user = false;
    session.qadmin = false
    session.hr = false
    res.redirect('/')

})

exports = module.exports = route 
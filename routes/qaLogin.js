const qaUsers = require('../db/db').qaUsers
const route = require('express').Router()
route.get('/', (req, res) => {
    res.render('qaLogin')
})

route.post('/', (req, res) => {

    qaUsers.findOne({
        where: {
            username: req.body.username
        }
    }).then((user) => {
        if (!user) {
            res.send('No Such User')
        }
        if (user.password !== req.body.password) {
            res.send('password incorrect')
        }
        var session = req.session
        session.qadmin = true;
        res.redirect('/quarterAdmin')
    }).catch((err) => {
        throw err
    })

})



exports = module.exports = route
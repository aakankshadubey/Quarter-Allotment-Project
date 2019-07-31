const users = require('../db/db').users
const route = require('express').Router()
const session = require('express-session')

 
route.get('/', (req, res) => {
    res.render('userLogin')
})

route.post('/', (req, res) => {

    users.findOne({
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
        session.user = true;
        session.userName = req.body.username
      
        res.redirect('/rules')
    }).catch((err) => {
        throw err
    })

})



exports = module.exports = route
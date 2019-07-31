const hrUsers = require('../db/db').hrUsers

const route = require('express').Router()
route.get('/', (req, res) => {

    res.render('hrLogin')
})

route.post('/', (req, res) => {
    hrUsers.findOne({
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
        session.hr = true;
        res.redirect('/applicantList')
      
    }).catch((err) => {
        throw err
    })
})



exports = module.exports = route

const express = require('express')
const route = express.Router()
const sequelize = require('sequelize')
const db = require('../db/db').applicantStatus
const path = require('path')

const filePath = path.join(__dirname, "../public/userStatus")

route.get('/', (req, res, next) => {
    var session = req.session
  if(!session.user) {
    res.redirect('/userLogin')
  }
  else {
    next()
  }
})

route.use('/', express.static(filePath))
route.get('/getStatus', (req, res) => {
    var session = req.session
    var username = session.userName
    db.findOne({ where: {username: username} }).then(result => {
      res.send(result)

      })
      
})





exports = module.exports = route
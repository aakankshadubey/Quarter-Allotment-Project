const route = require('express').Router()
const db = require('../db/db').applicantStatus
const sequelize = require('sequelize')
const quarters = require('../db/db').quarters


route.post('/', (req, res) => {

    db.update({
        status : req.body.qno,
      }, {
        where: {
            name : req.body.name
        }
      }
    );

    quarters.create({
      number: req.body.qno
      }).then((createdUser) => {
        res.send({success : true})    
  })

})

exports = module.exports = route

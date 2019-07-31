const route = require('express').Router()
const db = require('../db/db').applicantStatus
const sequelize = require('sequelize')


route.post('/', (req, res) => {

    db.update({
        status : 0,
      }, {
        where: {
            name : req.body.name
        }
      }
    );

  res.send({success : true})    
})

exports = module.exports = route

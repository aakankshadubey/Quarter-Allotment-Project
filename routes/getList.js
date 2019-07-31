const express = require('express')
const route = require('express').Router()
const path = require('path')
const sequelize = require('sequelize')
const db = require('../db/db').db


   route.get('/', (req, res) => {
    db.query("SELECT * FROM `applicant_status_dbs`  WHERE status=-1", { type: sequelize.QueryTypes.SELECT})
    .then(result => {
      res.send(result)
    })
    
})

exports = module.exports = route

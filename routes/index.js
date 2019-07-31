const express = require('express')
const route = express.Router()
const app = express()
const path = require('path')

const srcPath = path.join(__dirname, "../img") 
route.use('/src', express.static(srcPath))

const homePath = path.join(__dirname, "../public/homePage")
const filePath = path.join(__dirname, "../public/rules")

route.use('/', express.static(homePath))
route.use('/rules', express.static(filePath))
route.use('/userLogin', require('./userLogin'))
route.use('/hrLogin', require('./hrLogin'))
route.use('/qaLogin', require('./qaLogin'))

route.use('/applicationForm', require('./applicationForm'))
route.use('/userStatus', require('./userStatus'))
route.use('/applicantList', require('./applicantList'))

route.use('/verify', require('./verify'))
route.use('/quarterAdmin', require('./quarterAdmin'))
route.use('/confirm', require('./confirmQuarter'))
route.use('/logout', require('./logout'))



exports = module.exports = route


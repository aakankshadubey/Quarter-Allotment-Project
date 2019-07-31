const express = require('express')
const route = express.Router()
const path = require('path')
const applicants = require('../db/db').applicants
const applicantStatus = require('../db/db').applicantStatus

const filePath = path.join(__dirname, "../public/applicationForm")

route.get('/',(req, res, next) => {
  var session = req.session
  if(!session.user) {
    res.redirect('/userLogin')
  }
  else {
    next()
  }
})


route.use('/', express.static(filePath))

route.post('/', (req, res) => {
 
  console.log(req.body)

  applicants.create({
    name: req.body.name,
    employeeId: req.body.employeeId,
    department: req.body.department,
    sex: req.body.sex,
    fatherName: req.body.fatherName,
    motherName: req.body.motherName,
    dob: req.body.dob,
    address: req.body.address,
    state: req.body.state,
    zip: req.body.zip,
    contactNumber: req.body.contactNumber,
    emailId: req.body.emailId,
    aadhaarNumber: req.body.aadhaarNumber,
    panNumber: req.body.panNumber,
    designation: req.body.designation,
    fatherContactNumber: req.body.fatherContactNumber,
    motherContactNumber: req.body.motherContactNumber,
    maritalStatus: req.body.maritalStatus,
    spouseName: req.body.spouseName

  }).then((createdUser) => {
    var session = req.session
    applicantStatus.create({
      username: session.userName,
      name: req.body.name,
      employeeId: req.body.employeeId,
      department: req.body.department,
      designation: req.body.designation,
      status: -1
    }).then((newCreatedUser) => {
      res.send({
        redirect: '/userStatus'
      })
    })

  })

})

exports = module.exports = route

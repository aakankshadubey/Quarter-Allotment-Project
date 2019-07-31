const express = require('express')
const app = express()
const session = require('express-session')
app.set("view engine", "hbs")

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(session({secret: 'SomeSecretString',
userName : null,
user : false,
hr : false, 
qadmin : false
}));


const PORT = process.env.PORT || 8080

app.use('/', require('./routes/index'))
app.listen(PORT, () => {
    console.log('Server Running On PORT : http://localhost:' + PORT)
})


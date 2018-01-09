var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var defaultErrorHandler = require('./config/handlers').defaultErrorHandler
var corsOptions = require('./config/handlers').corsOptions
var dbConnect = require('./config/mlab/mlab-config')
var session = require('./authentication/sessions')
var Auth = require('./authentication/auth')

//declare routes
//
//
//

let app = express()
let server = require('http').createServer(app)
var port = 3000

function Validate(req, res, next) {
    // ONLY ALLOW GET METHOD IF NOT LOGGED IN 
    console.log(req.session)
    if (req.method !== 'GET' && !req.session.uid) {
        return res.status(401).send({ error: 'Please Login or Register to continue' })
    }
    return next()
}

function logger(req, res, next) {
    console.log('INCOMING REQUEST', req.url)
    next()
}

// REGISTER MIDDLEWARE
app.use(express.static(__dirname + '/../www/public'))
app.use(session)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('*', logger)
app.use('*', cors(corsOptions))
app.use('/', Auth)

// LOCKS API TO REQUIRE USER AUTH
app.use(Validate)
// app.use('/api', api) <-- Base api stuff?
app.use('/', defaultErrorHandler)

server.listen(port, () => {
    console.log("Server listening on port: ", port)
})
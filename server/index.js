var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var defaultErrorHandler = require('./config/handlers').defaultErrorHandler
var corsOptions = require('./config/handlers').corsOptions
var dbConnect = require('./config/mlab/mlab-config')
var session = require('./authentication/sessions')
var Auth = require('./authentication/auth')

//declare routes
var backgroundRoutes = require('./routes/background-routes')
var quoteRoutes = require('./routes/quote-routes')
var weatherRoutes = require('./routes/weather-routes')
//

let app = express()
let server = require('http').createServer(app)
var port = 3000

function Validate(req, res, next) {
    console.log(req.session)
    if (!req.session.uid) {
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
app.use('/api/background', backgroundRoutes)

// LOCKS API TO REQUIRE USER AUTH
app.use(Validate)
// app.use('/api', api) <-- Base api stuff?
app.use('/', defaultErrorHandler)
app.use('/api/quote', quoteRoutes)
app.use('/api/weather', weatherRoutes)

server.listen(port, () => {
    console.log("Server listening on port: ", port)
})



/*

*** TO DO  ***
User Model / User Creation:
 - Eventually add user account control panel

Weather:
 - Formatting

Background:
 - Refresh Image
 - Formatting

Todo List:
 - 

Hamburger Menu / Music Playlist
 - 

Consider:
 - Drop down menu during user creation with list of viable city names (Need to investigate API City name list, sort by country code?)
    - http://openweathermap.org/help/city_list.txt

*/
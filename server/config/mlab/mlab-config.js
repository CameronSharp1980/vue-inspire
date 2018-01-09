// ESTABLISH WHERE THE DB LIVES
var mongoose = require('mongoose')
var connectionstring = 'mongodb://vue-inspire-admin:startgo@ds062889.mlab.com:62889/vue-inspire'
var connection = mongoose.connection;

// Establishes MongoDb Connection
mongoose.connect(connectionstring, {
    useMongoClient: true,
    keepAlive: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
});

connection.on('error', console.error.bind(console, 'connection error:'))

connection.once('open', function () {
    console.log('We are connected to the db')
});
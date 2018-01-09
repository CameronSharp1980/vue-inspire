let session = require('express-session');
let MongoDBStore = require('connect-mongodb-session')(session);
// var env = require('../config/env')
var connectionString = 'mongodb://vue-inspire-admin:startgo@ds062889.mlab.com:62889/vue-inspire'

console.log(connectionString)

let store = new MongoDBStore(
    {
        uri: connectionString,
        collection: 'Sessions'
    });

// Catch errors 
store.on('error', function (error) {
    console.error(error);
});

module.exports = session({
    secret: 'Koob eat now?',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week 
    },
    store: store,
    resave: true,
    saveUninitialized: true
})
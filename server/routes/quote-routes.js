var axios = require('axios')
var router = require('express').Router()

let quoteApi = axios.create({
    baseURL: 'http://quotesondesign.com/api/3.0/api-3.0.json',
    timeout: 2000
})

router.get('/api/quote', (req, res) => {
    quoteApi('')
        .then(quote => {
            console.log(quote.data)
            // var data = quote.data
            res.send(quote.data)
        })
        .catch(err => res.send(err))
})


module.exports = router
var axios = require('axios')
var router = require('express').Router()

let quoteApi = axios.create({
    baseURL: 'http://quotesondesign.com/api/3.0/api-3.0.json',
    timeout: 2000
})

router.get('/', (req, res) => {
    quoteApi('')
        .then(response => {
            console.log(response.data)
            // var data = quote.data
            res.send(response.data)
        })
        .catch(err => res.send(err))
})


module.exports = router
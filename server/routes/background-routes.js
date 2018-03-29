var axios = require('axios')
var router = require('express').Router()

let backgroundApi = axios.create({
    baseURL: 'http://www.splashbase.co/api/v1/images/random',
    timeout: 2000
})

router.get('/', (req, res) => {
    backgroundApi('')
        .then(response => {
            res.send(response.data.large_url)
        })
        .catch(err => res.send(err))
})


module.exports = router
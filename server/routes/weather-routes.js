var axios = require('axios')
var router = require('express').Router()

// var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=boise&units=imperial&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
// var apiId = '&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
// var unit = '&units=imperial';

let weatherApi = axios.create({
    baseUrl: '',
    // baseURL: 'http://api.openweathermap.org/data/2.5/weather?q=boise' + '&&APPID=bd82255fd0a21fa1238699b9eda2ee35/',
    timeout: 2000
})

router.get('/', (req, res) => {
    console.log("req: ", req)
    weatherApi(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}${req.query.weatherString}&APPID=bd82255fd0a21fa1238699b9eda2ee35`)
        .then(response => {
            res.status(200).send(response.data)
        })
        .catch(err => res.send(err))
})


module.exports = router
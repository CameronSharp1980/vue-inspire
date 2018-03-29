import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

let api = Axios.create({
    baseURL: window.location.host.includes("localhost") ? 'http://localhost:3000/api/' : '/api/',
    timeout: 2000,
    withCredentials: true
})

let auth = Axios.create({
    baseURL: window.location.host.includes("localhost") ? 'http://localhost:3000/' : '/',
    timeout: 2000,
    withCredentials: true
})

Vue.use(Vuex)

var store = new Vuex.Store({
    state: {
        error: {},
        user: {},
        backgroundPic: '',
        currentQuoteData: {
            data: {
                author: "Default Author",
                quote: "Default Quote"
            }
        },
        weatherData: { data: { temp: "No Weather Data" } },
        weatherUnit: {
            imperial: "&units=imperial",
            metric: "&units=metric"
        },
        weatherSuffix: {
            imperial: "&degF",
            metric: "&degC"
        },
        currentWeatherType: "imperial",
    },
    mutations: {
        handleError(state, err) {
            state.error = err
        },
        setUser(state, user) {
            state.user = user
        },

        // BACKGROUND IMAGE
        setBackground(state, backgroundImage) {
            // console.log(backgroundImage)
            state.backgroundPic = backgroundImage
            // console.log(state.backgroundPic)
        },

        // SET QUOTE
        setQuote(state, quoteData) {
            state.currentQuoteData = quoteData;
        },

        //SET WEATHER
        setWeather(state, weatherData) {
            state.weatherData = weatherData
        },
        setWeatherUnit(state) {
            console.log(state.currentWeatherType)
            state.currentWeatherType == "imperial" ? state.currentWeatherType = "metric" : state.currentWeatherType = "imperial";
        }
    },
    actions: {
        //#region AUTH
        authenticate({ commit, dispatch }) {
            auth('authenticate')
                .then(res => {
                    commit('setUser', res.data.data)
                    router.push({ name: 'Inspire' })
                })
                .catch(() => {
                    router.push({ name: 'Login' })
                })
        },
        submitLogin({ commit, dispatch }, user) {
            auth.post('login', user)
                .then(res => {
                    commit('setUser', res.data.data)
                    router.push({ name: 'Inspire' })
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        submitRegister({ commit, dispatch }, newUser) {
            auth.post('register', newUser)
                .then(res => {
                    commit('setUser', res.data.data)
                    router.push({ name: 'Inspire' })
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        logout({ commit, dispatch }) {
            auth.delete('logout')
                .then(res => {

                    commit('setUser', {})
                    router.push({ name: 'Login' })
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },

        //#endregion

        // CLOCK

        //#region BACKGROUND IMAGE
        getBackground({ commit, dispatch }) {
            api('background')
                .then(res => {
                    console.log("background: ", res)
                    commit('setBackground', res.data)
                })
        },

        //#endregion

        // QUOTE
        getQuote({ commit, dispatch }) {
            api('quote')
                .then(res => {
                    console.log("Quote: ", res)
                    commit('setQuote', res)
                })
        },

        //#region WEATHER

        getWeather({ commit, dispatch }, weatherString) {
            api('weather/', {
                params: {
                    weatherString: weatherString
                }
            })
                .then(res => {
                    console.log("Weather Data: ", res)
                    commit('setWeather', res)
                })
        },

        toggleWeatherUnit({ commit, dispatch }) {
            commit('setWeatherUnit')
        }

        //#endregion

    }
})

export default store
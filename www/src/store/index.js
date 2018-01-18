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

let imageApi = Axios.create({
    baseURL: 'http://www.splashbase.co/api/v1/images/random',
    timeout: 2000
})

// let quoteApi = Axios.create({
//     baseURL: 'http://quotesondesign.com/api/3.0/api-3.0.json',
//     timeout: 2000
// })

Vue.use(Vuex)

var store = new Vuex.Store({
    state: {
        error: {},
        user: {},
        backgroundPic: 'http://via.placeholder.com/350x150',
        currentQuote: "Default Quote..."
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
        setQuote(state, quote) {
            state.currentQuote = quote;
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
            imageApi('')
                .then(res => {
                    // console.log(res.data.large_url)
                    commit('setBackground', res.data.large_url)
                })
        },

        //#endregion

        // QUOTE
        getQuote({ commit, dispatch }) {
            api('quote')
                .then(res => {
                    console.log(res)
                    commit('setQuote', res.data.quote)
                })
        }

    }
})

export default store
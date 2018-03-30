<template>
    <div class="weather" @click="toggleWeatherUnit">

        <p>{{userCity}} : {{weatherData.data.main.temp}}
            <span v-html="weatherSuffix[currentWeatherType]">{{weatherSuffix[currentWeatherType]}}</span>
            <span>
                <img :src="weatherData.data.weather[0].icon" alt="Weather Conditions Icon">
            </span>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Weather',
        data() {
            return {

            }
        },
        mounted() {
            setTimeout(this.getWeather, 1000)
        },
        methods: {
            getWeather() {
                this.$store.dispatch('getWeather', {
                    weatherUnit: this.weatherUnit[this.currentWeatherType],
                    city: this.userCity
                })
                // SELF-REFRESH WEATHER EVERY 5 MINUTES
                var tickTock = setTimeout(this.getWeather, 300000)
            },
            toggleWeatherUnit() {
                this.$store.dispatch('toggleWeatherUnit')
                this.$store.dispatch('getWeather', {
                    weatherUnit: this.weatherUnit[this.currentWeatherType],
                    city: this.userCity
                })
            },
            logUserCity() {
                console.log(this.$store.state.user.city)
            }
        },
        computed: {
            weatherData() {
                return this.$store.state.weatherData;
            },
            currentWeatherType() {
                return this.$store.state.currentWeatherType;
            },
            weatherUnit() {
                return this.$store.state.weatherUnit;
            },
            weatherSuffix() {
                return this.$store.state.weatherSuffix;
            },
            userCity() {
                return this.$store.state.user.city;
            }
        },
        components: {

        }
    }
</script>

<style scoped>
</style>
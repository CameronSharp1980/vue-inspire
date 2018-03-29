<template>
    <div class="weather" @click="toggleWeatherUnit">
        <p>{{weatherData.data.temp}}
            <span v-html="weatherSuffix[currentWeatherType]">{{weatherSuffix[currentWeatherType]}}</span>
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
            this.getWeather()
        },
        methods: {
            getWeather() {
                this.$store.dispatch('getWeather', this.weatherUnit[this.currentWeatherType])
                // SELF-REFRESH WEATHER EVERY 5 MINUTES
                var tickTock = setTimeout(this.getWeather, 300000)
            },
            toggleWeatherUnit() {
                this.$store.dispatch('toggleWeatherUnit')
                this.$store.dispatch('getWeather', this.weatherUnit[this.currentWeatherType])
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
            }
        },
        components: {

        }
    }
</script>

<style scoped>
</style>
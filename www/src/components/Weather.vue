<template>
    <div class="weather" @click="getWeather">
        {{weatherData}}
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
            this.$store.dispatch('getWeather', this.weatherUnit)
        },
        methods: {
            getWeather() {
                this.$store.dispatch('getWeather', this.weatherUnit)
            }
        },
        computed: {
            weatherData() {
                return this.$store.state.weatherData;
            },
            weatherUnit() {
                return this.$store.state.weatherUnit
            }
        },
        components: {

        }
    }
</script>

<style scoped>
</style>
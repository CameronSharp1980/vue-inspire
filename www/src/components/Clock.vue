<template>
    <div class="clock" @click="cycleMilitaryTime">
        {{salutation}} {{hours}}:{{minutes}}:{{seconds}}{{ampm}}
    </div>
</template>

<script>
    export default {
        name: 'Clock',
        data() {
            return {
                militaryTime: false,
                hours: '',
                minutes: '',
                seconds: '',
                ampm: '',
                salutation: ''
            }
        },
        mounted() {
            this.startClock()
        },
        methods: {
            startClock() {
                // console.log("Clock started")
                var todaysDate = new Date()
                this.hours = todaysDate.getHours()
                this.minutes = todaysDate.getMinutes()
                this.seconds = todaysDate.getSeconds()
                this.ampm = ''

                if (!this.militaryTime) {
                    this.ampm = this.hours >= 12 ? "PM" : "AM";
                }

                if (this.minutes < 10) {
                    this.minutes = '0' + this.minutes
                }

                if (this.seconds < 10) {
                    this.seconds = '0' + this.seconds
                }

                if (this.hours < 12) {
                    this.salutation = "Good Morning!"
                } else if (this.hours > 12 && this.hours <= 17) {
                    this.salutation = "Good Afternoon!"
                } else {
                    this.salutation = "Good Evening!"
                }

                if (!this.militaryTime) {
                    if (this.hours > 12) {
                        this.hours -= 12;
                    }
                }

                var tickTock = setTimeout(this.startClock, 100)
            },
            cycleMilitaryTime() {
                this.militaryTime = !this.militaryTime
                // console.log(this.militaryTime)
            }
        },
        computed: {

        },
        components: {

        }
    }
</script>

<style scoped>
</style>
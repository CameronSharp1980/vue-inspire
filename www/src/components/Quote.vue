<template>
    <div class="quote" @click="cycleQuote">
        {{currentQuote}}
    </div>
</template>

<script>
    export default {
        name: 'Quote',
        data() {
            return {

            }
        },
        mounted() {
            this.$store.dispatch('getQuote')
        },
        methods: {
            cycleQuote() {
                this.$store.dispatch('getQuote')
            }
        },
        computed: {
            currentQuote() {
                return this.$store.state.currentQuote;
            }
        },
        components: {

        }
    }
</script>

<style scoped>
</style>
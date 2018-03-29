<template>
    <div class="quote" @click="cycleQuote">
        <p v-html="currentQuoteData.data.quote">{{currentQuoteData.data.quote}}</p><p>{{currentQuoteData.data.author}}</p>
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
            currentQuoteData() {
                return this.$store.state.currentQuoteData;
            }
        },
        components: {

        }
    }
</script>

<style scoped>
</style>
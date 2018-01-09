<template>
  <div class="inspire">
    <Clock></Clock>
    <Quote></Quote>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
  import Clock from './Clock'
  import Quote from './Quote'
  export default {
    name: 'Inspire',
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
      }
    },
    computed: {

    },
    components: {
      Clock,
      Quote
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
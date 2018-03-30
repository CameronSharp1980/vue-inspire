<template>
  <div class="inspire">
    <div class="main-grid">
      <div class="topmenu-div">
        <button @click="logout">Logout</button>
      </div>
      <div class="data-grid-div">
        <div class="weather-div">
          <Weather></Weather>
        </div>
        <div class="blank-div"></div>
        <div class="blank-div"></div>
        <div class="blank-div"></div>
        <div class="clock-div">
          <Clock></Clock>
        </div>
        <div class="blank-div"></div>
        <div class="blank-div"></div>
        <div class="blank-div"></div>
        <div class="quote-div">
          <Quote></Quote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Clock from './Clock'
  import Quote from './Quote'
  import Weather from './Weather'
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
      Quote,
      Weather
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-grid {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
  }

  .data-grid-div {
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    grid-template-rows: 33.3% 33.3% 33.3%;
  }
</style>
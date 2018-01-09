<template>
  <div id="app" :style="{ backgroundImage: 'url(' + backgroundPic + ')' }">
    <error></error>
    <router-view/>
  </div>
</template>

<script>
  import Error from './components/Error'
  export default {
    name: 'app',
    data() {
      return {

      }
    },
    mounted() {
      //dispatch authenticate when page mounts
      this.$store.dispatch('authenticate')
      this.refreshBackground()
    },
    components: {
      Error
    },
    methods: {
      refreshBackground() {
        this.$store.dispatch('getBackground')
        // SELF-REFRESH BACKGROUND EVERY 5 MINUTES
        var tickTock = setTimeout(this.refreshBackground, 300000)
      }
    },
    computed: {
      backgroundPic() {
        return this.$store.state.backgroundPic
      }
    }
  }
</script>

<style>
  #app {
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
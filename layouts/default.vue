<template>
  <div>
    <Navbar />
    <Sidebar />
    <div class="content-wrapper">
      <!-- Optional spinner to render on nuxt bootstrap -->
      <!-- <Loading v-if="loading" /> -->
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
// import Loading from '../components/Loading.vue'

export default {
  components: {
    Navbar,
    Sidebar,
    // Loading,
  },
  computed: {
    loading() {
      return this.$store.state.loading
    },
  },
  beforeMount() {
    window.ononline = (event) => {
      setTimeout(() => {
        this.$store.dispatch('fetchRequestsLength')
      }, 3500)
    }
  },
}
</script>

<style>
.content-wrapper {
  margin-top: 9vh;
  position: relative;
  min-height: 91vh;
  z-index: 5;
  background-image: url('~assets/images/wave.svg');
  background-position: 0% 100%;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>

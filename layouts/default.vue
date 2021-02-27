<template>
  <div>
    <Navbar />
    <Sidebar />
    <!-- Our container for variable content with some css -->
    <div
      class="content-wrapper"
      :class="{ 'pending-requests': pendingRequests > 0 }"
    >
      <!-- Optional spinner to render while page loading -->
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
  // Getting sources from store to be used on template
  computed: {
    loading() {
      return this.$store.state.loading
    },
    pendingRequests() {
      return this.$store.state.pending
    },
  },
  beforeMount() {
    // Event listener to remove pending requests alert when conexion is restablished
    window.ononline = async (event) => {
      await setTimeout(() => {
        this.$store.commit('changePending', 0)
      }, 2000)
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
  transition: all 0.2s;
}
.pending-requests {
  margin-top: calc(9vh + 56px);
}
</style>

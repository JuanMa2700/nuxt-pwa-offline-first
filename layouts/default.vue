<template>
  <div>
    <Navbar />
    <Sidebar />
    <div class="content-wrapper">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
  components: {
    Navbar,
    Sidebar,
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

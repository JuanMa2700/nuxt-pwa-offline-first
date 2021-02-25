<template>
  <div>
    <Navbar />
    <Sidebar />
    <Nuxt />
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

<template>
  <div>
    <Navbar @activeMenu="changeMenu" />
    <Sidebar ref="sidebar" />
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
  methods: {
    changeMenu(activeMenu) {
      this.$refs.sidebar.changeState(activeMenu)
    },
  },
}
</script>

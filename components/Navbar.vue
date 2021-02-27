<template>
  <div class="navbar">
    <div class="container flex-container">
      <div class="icon-wrapper">
        <font-awesome-icon
          v-if="!activeMenu"
          class="nav-icon"
          :icon="['fas', 'bars']"
          @click="showMenu"
        />
        <font-awesome-icon
          v-if="activeMenu"
          class="nav-icon"
          :icon="['fas', 'times']"
          @click="hideMenu"
        />
      </div>
      {{ currentView }}
      {{ pendingRequests }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { previousView: 'CAPTURA DE DATOS' }
  },
  computed: {
    currentView() {
      return this.$store.state.currentView
    },
    activeMenu() {
      return this.$store.state.activeMenu
    },
    pendingRequests() {
      return this.$store.state.pending
    },
  },
  methods: {
    showMenu() {
      this.previousView = this.$store.state.currentView
      this.$store.commit('changeView', 'MENU')
      this.$store.commit('changeMenuState', !this.$store.state.activeMenu)
    },
    hideMenu() {
      this.$store.commit('changeView', this.previousView)
      this.$store.commit('changeMenuState', !this.$store.state.activeMenu)
    },
  },
}
</script>

<style>
.navbar {
  position: fixed;
  top: 0;
  z-index: 50;
  height: 9vh;
  width: 100vw;
  display: flex;
  align-items: center;
  box-shadow: -1px 4px 6px -2px rgba(0, 0, 0, 0.75);
  background-color: white;
  font-size: 18px;
}
.flex-container {
  display: flex;
  align-items: center;
}
.icon-wrapper {
  width: 2rem;
}
.nav-icon {
  font-size: 20px;
  cursor: pointer;
}
</style>

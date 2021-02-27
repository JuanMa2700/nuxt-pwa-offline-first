<template>
  <div class="navbar">
    <v-alert
      class="requests-alert"
      :class="{ 'show-requests-alert': pendingRequests > 0 }"
      :value="true"
      type="info"
    >
      envíos pendientes: {{ pendingRequests }}
    </v-alert>
    <div class="nav">
      <div class="app-container flex-container">
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
      </div>
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
.nav {
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
.requests-alert {
  position: fixed !important;
  display: flex !important;
  height: 8vh;
  justify-content: center;
  align-items: center;
  background-color: #ffe8e1 !important;
  border: 1px solid #fc4400 !important;
  z-index: 10;
  top: 0;
  width: 100vw;
  tansition: all 0.2s;
}
.show-requests-alert {
  top: 9vh;
}
.v-alert__content,
.v-icon {
  color: #fc4400 !important;
}
.v-alert__content {
  font-weight: 500;
}
.v-icon {
  transform: translateY(-2px);
  margin-right: 7px;
}
</style>

<template>
  <div class="navbar">
    <div class="container">
      <font-awesome-icon
        v-if="!activeMenu"
        class="nav-icon"
        :icon="['fas', 'bars']"
        @click="changeMenu"
      />
      <font-awesome-icon
        v-if="activeMenu"
        class="nav-icon"
        :icon="['fas', 'times']"
        @click="changeMenu"
      />
      CAPTURA DE DATOS
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: false,
    }
  },
  methods: {
    changeMenu() {
      this.activeMenu = !this.activeMenu
      this.$emit('activeMenu', this.activeMenu)
    },
  },
}
</script>

<style>
.navbar {
  position: fixed;
  z-index: 50;
  height: 9vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -1px 4px 6px -2px rgba(0, 0, 0, 0.75);
  font-size: 18px;
}
.container {
  display: flex;
  align-items: center;
}
.nav-icon {
  color: red;
  font-size: 20px;
  margin-right: 0.9rem;
  cursor: pointer;
}
</style>

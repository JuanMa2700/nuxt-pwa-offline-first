<template>
  <div class="sidebar" :class="{ disabled: !activeMenu }">
    <div class="menu-list">
      <NuxtLink class="menu-item" to="/" @click.native="updateView()">
        Captura de Datos
      </NuxtLink>
      <NuxtLink class="menu-item" to="/perfil" @click.native="updateView()"
        >Mi Perfil</NuxtLink
      >
    </div>
    <div class="sidebar-footer">
      <p>Version 0.1</p>
      <p>Todos los derechos reservados</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    activeMenu() {
      return this.$store.state.activeMenu
    },
  },
  methods: {
    updateView() {
      this.$store.commit('changeMenuState', !this.$store.state.activeMenu)
      document.querySelector('.sidebar').classList.add('disabled')
    },
  },
}
</script>

<style>
.sidebar {
  position: absolute;
  z-index: 10;
  padding: 2rem;
  transition: transform 0.3s ease;
  background-color: white;
  height: 91vh;
  top: 9vh;
  width: 90%;
  max-width: 30rem;
  box-shadow: -3px 25px 43px -10px rgba(0, 0, 0, 0.75);
}
.disabled {
  transform: translateX(-40rem);
}
.sidebar .menu-item {
  display: block;
  text-decoration: none;
  margin-bottom: 1.3rem;
  cursor: pointer;
}
.sidebar-footer {
  position: absolute;
  bottom: 0;
}
.sidebar-footer p {
  color: rgba(51, 51, 51, 0.5) !important;
  font-weight: 100;
  font-size: 12px;
  margin-top: 8px;
}
</style>

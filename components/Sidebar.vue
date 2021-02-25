<template>
  <div class="sidebar disabled"></div>
</template>

<script>
export default {
  methods: {
    changeState(state) {
      if (state) {
        document.querySelector('.sidebar').classList.remove('disabled')
      } else {
        document.querySelector('.sidebar').classList.add('disabled')
      }
    },
  },
}
</script>

<style>
.sidebar {
  position: relative;
  z-index: 10;
  padding: 2rem;
  transition: margin-left 0.3s ease;
  height: 91vh;
  top: 9vh;
  width: 90%;
  max-width: 30rem;
  box-shadow: -3px 25px 43px -10px rgba(0, 0, 0, 0.75);
}
.disabled {
  margin-left: -20rem;
}
</style>

<!-- User profile page -->
<template>
  <div class="app-container profile-container">
    <div v-if="user" class="profile-photo">
      <img :src="user.imageUrl" />
    </div>
    <div v-if="user" class="profile-name">
      <p>{{ user.name }}</p>
    </div>
    <div v-if="user" class="social-icons">
      <a href="https://www.linkedin.com">
        <font-awesome-icon class="social-icon" :icon="['fab', 'linkedin-in']" />
      </a>
      <a href="https://www.twitter.com">
        <font-awesome-icon class="social-icon" :icon="['fab', 'twitter']" />
      </a>
      <a href="https://www.facebook.com">
        <font-awesome-icon
          class="social-icon facebook"
          :icon="['fab', 'facebook-f']"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    }
  },
  async fetch() {
    // fetching user data
    const data = await this.$axios.$get(
      'https://jsonplaceholder.typicode.com/users/1'
    )
    // We extract the entire object
    this.user = data
    // Custom image for profile image
    this.user.imageUrl = 'https://picsum.photos/id/1005/200'
  },
  mounted() {
    // Optional for loading component render
    this.$store.commit('changeLoading', false)
    this.$store.commit('changeView', 'MI PERFIL')
  },
}
</script>

<style>
.profile-photo {
  margin-top: 4rem;
  padding: 4px;
  width: 9rem;
  height: 9rem;
  background-color: #eeeeee;
  border-radius: 100%;
}
.profile-photo img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 100%;
}
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-name {
  margin: 1.5rem;
}
.profile-name p {
  font-size: 23px;
}
.social-icons {
  display: flex;
  width: 130px;
  justify-content: space-between;
}
.social-icon path {
  color: white !important;
}
.facebook path {
  transform: scale(1.5) translate(-15%);
}
.social-icon {
  cursor: pointer;
  padding: 6px;
  width: 1.7rem !important;
  height: 1.7rem;
  background-color: black;
  border-radius: 100%;
}
</style>

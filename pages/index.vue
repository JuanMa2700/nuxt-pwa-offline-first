<!-- Our principal page with form functionality -->
<template>
  <div class="app-container">
    <form id="app" class="form" @submit="checkForm">
      <p>Formulario</p>
      <p style="font-weight: 100; font-size: 12px">
        Por favor complete el siguiente formulario
      </p>

      <div class="field">
        <input id="name" v-model="name" type="text" name="name" />
        <label for="name" :class="{ dismiss: name }">Nombre *</label>
        <!-- Conditional element for name required error -->
        <div v-if="errors.name" class="alert">{{ errors.name }}</div>
      </div>

      <div class="field">
        <input id="address" v-model="address" type="text" name="age" min="0" />
        <label for="address" :class="{ dismiss: address }"> Dirección </label>
      </div>

      <div class="field">
        <select id="gender" v-model="gender" name="gender">
          <option>Masculino</option>
          <option>Femenino</option>
        </select>
        <font-awesome-icon
          class="custom-select-arrow"
          :icon="['fas', 'sort-down']"
        />
        <label for="gender" :class="{ dismiss: gender }">Género</label>
      </div>
      <p class="required-fields">* Campos requeridos</p>
      <input class="submit" type="submit" value="ENVIAR" />
    </form>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}
      <template #action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: {},
      name: null,
      address: null,
      gender: null,
      snackbar: false,
      text: '',
      timeout: 3000,
    }
  },
  mounted() {
    // Optional for loading component render
    this.$store.commit('changeLoading', false)
    this.$store.commit('changeView', 'CAPTURA DE DATOS')
  },
  methods: {
    async checkForm(e) {
      // Prevent default form behaviour
      e.preventDefault()
      this.errors = {}
      // Validation for required name
      if (!this.name) {
        this.errors.name = 'El nombre es obligatorio.'
        // If name missing return
        return
      }
      const payload = {
        name: this.name,
        address: this.address,
        gender: this.gender,
      }
      const headers = { contentType: 'application/json' }
      try {
        // PUT request to mock server using axios library
        await this.$axios.$put('/put', payload, {
          headers,
        })
        // Text for material snackbar to show request success resoult
        this.text = '¡Información enviada con éxito!'
      } catch (e) {
        // Text for material snackbar to show request error
        this.text = `Error al enviar información`
        // If error sending request update store pending requests counter
        this.$store.dispatch('fetchRequestsLength')
      }
      // always render a snackbar after sending our http request
      // to show success or error
      this.snackbar = true
    },
  },
}
</script>

<style>
.form {
  padding: 2rem 0;
  display: block;
  width: 100%;
}
.form p {
  margin: 0;
}
.error-span {
  color: red;
  font-size: 7px;
}
.required-fields {
  font-size: 10px;
  font-weight: 100;
}
form .field {
  display: flex;
  position: relative;
  margin-top: 1.4rem;
  margin-bottom: 1rem;
}
form .field:last-of-type {
  margin-bottom: 0.7rem;
}
form .field label {
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  left: 1rem;
  transition: font-size 0.2s ease, top 0.2s ease;
  color: black;
  font-size: 14.5px;
  font-weight: 900;
}
form .field .custom-select-arrow {
  color: #c4c4c4 !important;
  font-size: 20px;
  position: absolute;
  right: 3%;
  transform: translate(-50%, 50%);
}
form .field select {
  appearance: none;
}
form .field input,
form .field select {
  flex: 1;
  padding: 1.3rem 1rem 0.5rem 1rem;
  border: none;
  background-color: #eeeeee;
  border-radius: 5px;
  font-size: 15px;
}

form .field input:focus {
  outline: none;
}

form .field input:focus + label {
  font-size: 0.6rem;
  top: 0;
}
form .field label.dismiss {
  font-size: 0.6rem;
  top: 0;
}
.submit {
  margin-top: 0.7rem;
  width: 100%;
  cursor: pointer;
  padding: 1.2rem 1rem 1.2rem 1rem;
  border-radius: 5px;
  border: none;
  background: rgb(109, 147, 252);
  background: linear-gradient(
    349deg,
    rgba(109, 147, 252, 1) 35%,
    rgba(114, 237, 242, 1) 80%
  );
  color: white;
  font-size: 20px;
  text-shadow: 0px 1.5px 2.3px #3e3e3e;
}
.alert {
  position: absolute;
  color: red;
  font-size: 12px;
  bottom: -0.8rem;
  left: 0.5rem;
}
.v-snack__content {
  color: white !important;
}
</style>

<template>
  <transition name="fade">
    <div v-if="show" class="registration-form">
      <h2 class="text-center">Register</h2>
      <form @submit.prevent="register">
        <div class="mb-3">
          <label for="firstName" class="form-label">First Name</label>
          <input type="text" class="form-control" id="firstName" v-model="firstName" required>
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Last Name</label>
          <input type="text" class="form-control" id="lastName" v-model="lastName" required>
        </div>
        <div class="mb-3">
          <label for="Username" class="form-label">Username</label>
          <input type="Username" class="form-control" id="username" v-model="username" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-primary w-100">Register</button>
        <button type="button" class="btn btn-secondary w-100 mt-2" @click="$emit('close')">Cancel</button>
      </form>
    </div>
  </transition>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegistrationForm',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      passsalt: ''
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('https://bakery.permavite.com/api/register/user', {
          FirstName: this.firstName,
          LastName: this.lastName,
          Username: this.username,
          Password: this.password,
          PassSalt: this.passsalt

        });
        console.log('User registered:', response.data);
        this.$emit('close');
      } catch (error) {
        console.error('Error registering user:', error);
      }
    }
  }
};
</script>

<style scoped>
.registration-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
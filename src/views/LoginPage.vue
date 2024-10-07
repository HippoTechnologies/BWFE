<template>
  <div id="app" class="d-flex justify-content-center align-items-start vh-100">
    <main class="container form-container mt-5" style="max-width: 350px;">
      <transition name="fade">
        <div v-if="!showRegistrationForm">
          <h2 class="text-center">Login</h2>
          <form @submit.prevent="handleSubmit">
            <div class="input-field mb-3">
              <input type="text" name="username" id="username" class="form-control" placeholder="Username/Email" v-model="username">
            </div>
            <div class="input-field mb-3">
              <input type="password" name="password" id="password" class="form-control" placeholder="Enter Your Password" v-model="password">
            </div>
            <div class="d-flex justify-content-between mb-3">
              <a href="#" class="text-decoration-none">Forgot Password?</a>
            </div>
            <button @click="login">Continue</button>
          </form>
          <div class="footer mt-4 text-center">
            <span>Or Connect With Social Media</span>
            <div class="social-fields mt-2 d-flex justify-content-center">
              <a href="#" class="btn btn-outline-primary me-2">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="btn btn-outline-primary me-2">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="btn btn-outline-primary">
                <i class="fab fa-google"></i>
              </a>
            </div>
            <div class="mt-4">
              <span>Don't have an account? <a href="#" class="text-decoration-none" @click.prevent="showRegistrationForm = true">Register now</a></span>
            </div>
          </div>
        </div>
      </transition>
      <RegistrationForm :show="showRegistrationForm" @close="showRegistrationForm = false" />
    </main>
  </div>
</template>

<script>
import RegistrationForm from '@/components/RegistrationForm.vue';
import { state } from '../store/store';

export default {
  name: 'Login',
  components: {
    RegistrationForm
  },
  data() {
    return {
      username: '',
      password: '',
      showRegistrationForm: false
    };
  },
  methods: {
    login() {
      state.isEmployee = true;
      this.$router.push({ name: 'Employee' });
    }
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
#app {
  padding-top: 60px; /* Adjust this value to control the distance from the navbar */
}
</style>
  
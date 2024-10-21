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
            <button class="btn login-form-btn w-100" @click="login">Continue</button>
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
.container {
  background-color: #FFFDEF; 
  color: #290102;
  border-radius: 20px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  width: 600px; /* Adjust this value to make the container wider */
  height: auto; /* Adjust this value to make the container taller */
  padding: 30px; 
  margin: auto;
}

.login-form {
  max-width: 500px;
  width: 100%;
  background-color: #CDC69A;
  color: #290102;
}

.login-form-btn{
  background-color: #290102; /* Change to your desired background color */
  color: #FFFDEF; /* Change to your desired text color */
  border: none; /* Remove border if desired */
  padding: 10px 20px; /* Adjust padding as needed */
  cursor: pointer; /* Change cursor to pointer */
}

.login-form-btn:hover {
  background-color: #CDC69A; /* Change to your desired hover background color */
  color: #290102; /* Change to your desired hover text color */
}

/* Social media icon styling */
.social-fields .btn{
  color: #290102; /* Change this to your desired brown color */
  border-color: #290102;
}

.social-fields .btn:hover {
  background-color: #CDC69A; /* Change this to your desired hover background color */
  color: #290102; /* Change this to your desired hover text color */
}

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
  
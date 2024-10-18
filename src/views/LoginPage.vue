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
            <button @click="loginUser">Continue</button>
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
      <RegistrationForm :show="showRegistrationForm" @close="showRegistrationForm = false" @register-success="handleRegisterSuccess" />
    </main>
  </div>
</template>

<script>
import RegistrationForm from '@/components/RegistrationForm.vue';
import { state } from '../store/store';
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'Login',
  components: {
    RegistrationForm
  },
  data() {
    return {
      username: '',
      password: '',
      errorMessage: null,
      showRegistrationForm: false
    };
  },
  methods: {
  async loginUser() {
    try {
      const response = await axios.post('https://bakery.permavite.com/api/login', {
        username: this.username,
        password: this.password,
      });
      console.log(response);
      // Handle successful login
      if (response.status === 201) {
        // Assuming the response contains user data or token
        state.isEmployee = true;
        // Save the token or user data to sessionStorage
        sessionStorage.setItem('SessionId', response.data.id);
        
        // Redirect to the employee dashboard or update the Navbar
        this.$router.push({ name: 'Employee' });
        Swal.fire({
          title: "Success!",
          text: "",
          icon: "success"
        });
      }
    } catch (e) {
      // Handle errors such as incorrect credentials
      console.log(e);
      if (e.status == 404) {
        Swal.fire({
          title: "Failure!",
          text: "Username or Password doesn't match",
          icon: "error"
        });
      }
      else {
        Swal.fire({
          title: "Failure!",
          text: "Failed to log in",
          icon: "error"
        });
      }

      if (error.response && error.response.data.message) {
        this.errorMessage = error.response.data.message;
      } else {
        this.errorMessage = "An error occurred. Please try again.";
      }
    }
  },
  handleRegisterSuccess() { //not sure if this has to be async
      // Redirect to the Employee dashboard after successful registration
      this.$router.push({ name: 'Employee' });
      Swal.fire({
        title: "Success!",
        text: "",
        icon: "success"
      });
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
  
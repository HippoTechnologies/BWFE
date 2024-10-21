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
        <button type="submit" class="btn register-btn w-100">Register</button>
        <button type="button" class="btn cancel-btn w-100 mt-2" @click="$emit('close')">Cancel</button>
      </form>
    </div>
  </transition>
</template>

<script>
import { state } from '@/store/store';
import axios from 'axios';
import Swal from 'sweetalert2';

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
        console.log(response);
        // Handle successful login
        if (response.status === 201) {
          this.$emit('register-success');
          // Assuming the response contains user data or token
          state.isEmployee = true;
          // Save the token or user data to sessionStorage
          sessionStorage.setItem('SessionId', response.data.id);
          
          // Redirect to the employee dashboard or update the Navbar
          this.$router.push({ name: 'Employee' });
        }
      } catch (e) {
        // Handle errors such as incorrect credentials
        if (state.isEmployee != true) {
          Swal.fire({
            title: "Failure!",
            text: "",
            icon: "error"
          });
        }
      }
    }
  }
};
</script>

<style scoped>
.registration-form {
  max-width: 800px;
  border-radius: 8px; 
  margin: auto;
  padding: 10px;
  background: #FFFDEF;
  color: #290102;
}

.register-btn {
  background-color: #290102; /* Change this to your desired register button background color */
  color: white; /* Change this to your desired register button text color */
  border: none; /* Remove border */
  border-radius: 4px; 
  padding: 10px 20px; 
  cursor: pointer; /* Change cursor to pointer on hover */
}

.register-btn:hover {
  background-color: wheat; /* Optional: Change background color on hover */
  color: #290102;
}

.cancel-btn {
  background-color: #CDC69A; /* Change this to your desired cancel button background color */
  color: #290102; /* Change this to your desired cancel button text color */
  border: none; /* Remove border */
  border-radius: 4px; /* Optional: Add rounded corners */
  padding: 10px 20px; /* Optional: Add padding inside the button */
  cursor: pointer; /* Change cursor to pointer on hover */
}

.cancel-btn:hover {
  background-color: #999; /* Optional: Change background color on hover */
  color: white;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
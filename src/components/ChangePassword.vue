<template>
    <div class="login-container">
      <div class="login-form">
        <h2>Change Password</h2>
        <form @submit.prevent="handleChangePassword">
          <div class="input-group">
            <input type="password" v-model="currentPassword" placeholder="Current Password" required />
          </div>
          <div class="input-group">
            <input type="password" v-model="newPassword" placeholder="New Password" required />
          </div>
          <div class="input-group">
            <input type="password" v-model="confirmPassword" placeholder="Confirm New Password" required />
          </div>
          <button type="submit">Change Password</button>
        </form>
        <div class="social-login">
          <p>Connect with social media:</p>
          <div class="social-icons">
            <a href="#" class="icon"><i class="fab fa-twitter"></i></a>
            <a href="#" class="icon"><i class="fab fa-facebook"></i></a>
            <a href="#" class="icon"><i class="fab fa-google"></i></a>
          </div>
        </div>
        <div class="forgot-register">
          <p>Remembered your password? <a href="/login" class="register-link">Login now</a></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChangePassword',
    data() {
      return {
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      };
    },
    methods: {
      handleChangePassword() {
        // Add your change password logic here
        if (this.newPassword !== this.confirmPassword) {
          alert("New passwords do not match!");
          return;
        }
        console.log('Changing password with', this.currentPassword, this.newPassword);
        // Implement your logic to change the password here
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #acd0df;
  }
  
  .login-form {
    background-color: #acd0df;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 500px;
  }
  
  .input-group {
    margin-bottom: 15px;
    border-radius: 5px;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  input::placeholder {
    color: #888; /* Optional: Customize the placeholder color */
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: rgb(87, 171, 204);
  }
  
  .social-login {
    text-align: center;
    margin: 15px 0;
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
  }
  
  .icon {
    margin: 0 10px;
    color: blue;
    font-size: 24px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px; /* Set width and height for circular effect */
    height: 40px;
    border: 1px solid blue; /* Solid blue border */
    border-radius: 5px; /* Make it circular */
    transition: background-color 0.3s;
  }
  
  .icon:hover {
    background-color: rgba(0, 0, 255, 0.1); /* Optional: Change background color on hover */
  }
  
  .forgot-register {
    text-align: center;
  }
  
  .register-link {
    color: blue;
    text-decoration: underline;
  }
  </style>
  
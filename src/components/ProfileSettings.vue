<!-- src/components/ProfileSettings.vue -->
<template>
    <div class="profile-settings">
      <h2>Profile Settings</h2>
      <form @submit.prevent="changePassword">
        <div>
          <label for="old-password">Old Password:</label>
          <input type="password" v-model="oldPassword" required />
        </div>
        <div>
          <label for="new-password">New Password:</label>
          <input type="password" v-model="newPassword" required />
        </div>
        <div>
          <label for="confirm-password">Confirm Password:</label>
          <input type="password" v-model="confirmPassword" required />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      };
    },
    methods: {
      changePassword() {
        if (this.newPassword === this.confirmPassword) {
          // Process password change
          console.log('Password changed successfully');
        } else {
          console.error('Passwords do not match');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .profile-settings {
    padding: 20px;
  }
    </style> 

<template>
  <div class="profile-page">
    <h2>Profile Information</h2>
    
    <!-- Display User Information -->
    <div class="profile-info">
      <div class="profile-field">
        <label>First Name:</label>
        <span>{{ userProfile.firstName }}</span>
      </div>
      <div class="profile-field">
        <label>Last Name:</label>
        <span>{{ userProfile.lastName }}</span>
      </div>
      <div class="profile-field">
        <label>Email:</label>
        <span>{{ userProfile.email }}</span>
      </div>
    </div>

    <!-- Edit Profile Button -->
    <div class="edit-profile">
      <button @click="editProfile">Edit Profile</button>
    </div>

    <!-- Link to Change Password Page -->
    <div class="change-password-link">
      <router-link to="/changePassword" class="btn">Change Password</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userProfile: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
      },
    };
  },
  methods: {
    editProfile() {
      console.log('Redirecting to edit profile page...');
    },
  },
};
</script>

<style scoped>

/* Apply global background color */
.profile-page {
  background-color: #acd0df;
  padding: 40px 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

h2 {
  text-align: center;
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 30px;
}

/* Profile information section */
.profile-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.profile-field {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.profile-field label {
  font-weight: bold;
  color: #34495e;
}

.profile-field span {
  color: #555;
}

/* Edit profile button */
.edit-profile button {
  display: block;
  width: 100%;
  padding: 12px 0;
  font-size: 1.2rem;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.edit-profile button:hover {
  background-color: #2980b9;
  transition: background-color 0.3s ease;
}

/* Change password link button */
.change-password-link {
  text-align: center;
}

.change-password-link .btn {
  background-color: #e74c3c;
  color: white;
  padding: 12px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
}

.change-password-link .btn:hover {
  background-color: #c0392b;
  transition: background-color 0.3s ease;
}
</style>

<template>
  <div class="settings-page-container">
    <div class="settings-page">
      <h1>Settings</h1>

      <!-- User Profile Section -->
      <section class="user-profile">
        <h2>Your Profile</h2>
        <p><strong>Name:</strong> {{ userProfile.name }}</p>
        <p><strong>Email:</strong> {{ userProfile.email }}</p>
        <!-- Link to Profile Page -->
        <router-link to="/profile" class="profile-link btn profile-btn">Go to Profile</router-link>
        <button class="btn logout-btn" @click="logout">Logout</button>
      </section>

      <!-- Link to Request Admin Page -->
      <section class="request-admin">
        <h2>Admin Requests</h2>
        <router-link to="/admin-request" class="nav-link btn">Request Admin Access</router-link>
      </section>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import logo from '@/assets/logo.png'; // Ensure this path is correct
import { state } from '../store/store';
import { useRouter } from 'vue-router';

export default {
  name: 'Settings',
  setup() {
    const router = useRouter();
    const userProfile = ref({
      name: 'John Doe',
      email: 'johndoe@example.com',
    });
    
    const isEmployee = ref(true); // Example employee check
    const searchQuery = ref('');
    const selectedRecipe = ref(null);
    const selectedIngredient = ref(null);
    const recipes = ref([]); // Initialize with your recipe data
    const ingredients = ref([]); // Initialize with your ingredient data

    const logout = () => {
      state.isEmployee = false;
      router.push({ name: 'Home' });
    };

    const handleSearch = () => {
      console.log('Searching for:', searchQuery.value);
      // Implement search logic here
    };

    return {
      logo,
      userProfile,
      isEmployee,
      searchQuery,
      handleSearch,
      logout
    };
  },
};
</script>

<style scoped>
/* Main container with full background color */
.settings-page-container {
  min-height: 100vh; /* Ensure it covers the full viewport */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -150px;
}

/* Settings section with white background */
.settings-page {
  width: 650px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #FFFDEF; /* Keep the white background for the section */
  color: #290102;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 30px;
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 20px;
}

.user-profile,
.upload-section,
.remove-section,
.request-admin {
  margin-bottom: 40px;
}

/* Button styling */
.btn {
  display: inline-block;
  background-color: #290102;
  color: #FFFDEF;
  padding: 10px 15px;
  border-radius: 4px;
  text-decoration: none;
}

.logout-btn {
  margin-left: 20px;
}

.btn:hover {
  background-color: #CDC69A;
  color: #290102;
}
</style>

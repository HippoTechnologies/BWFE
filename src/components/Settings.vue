<template>
  <nav class="navbar">
    <ul class="nav-links">
      <!-- Left Side: Home and Welcome Message -->
      <li class="left-section">
        <router-link :to="{ name: 'Home' }" class="nav-link">
          <img :src="logo" alt="Logo" class="logo" />
        </router-link>
        <small class="welcome-text">Welcome, {{ userProfile.name }}</small>
      </li>

      <!-- Center Section: Schedule -->
      <li class="center-section">
        <!-- Add additional content here if needed -->
      </li>

      <!-- Inventory Dropdown -->
      <li class="inventory-section">
        <div class="dropdown">
          <button class="dropbtn">Inventory</button>
          <div class="dropdown-content">
            <router-link to="/ingredients">Ingredients</router-link>
            <router-link to="/recipe">Recipe</router-link>
            <router-link to="/sales">Sales</router-link>
          </div>
        </div>
      </li>

      <!-- Right Side: Search Bar -->
      <li class="right-section">
        <!-- Search Bar with Icon -->
        <div class="search-section">
          <input
            type="text"
            placeholder="Search..."
            v-model="searchQuery"
            class="search-input"
          />
          <button @click="handleSearch" class="search-button">
            <i class="fas fa-search"></i> <!-- Search Icon -->
          </button>
        </div>
      </li>
    </ul>
  </nav>

  <div class="settings-page-container">
    <div class="settings-page">
      <h1>Settings</h1>

      <!-- User Profile Section -->
      <section class="user-profile">
        <h2>Your Profile</h2>
        <p><strong>Name:</strong> {{ userProfile.name }}</p>
        <p><strong>Email:</strong> {{ userProfile.email }}</p>
        <!-- Link to Profile Page -->
        <router-link to="/profile" class="profile-link btn">Go to Profile</router-link>
      </section>

      <!-- Upload Recipes and Ingredients (restricted to staff) -->
      <section v-if="isEmployee" class="upload-section">
        <h2>Upload Recipes and Ingredients</h2>
        <div class="upload-form">
          <label for="recipeUpload">Upload Recipe:</label>
          <input type="file" id="recipeUpload" @change="uploadRecipe">
          <label for="ingredientsUpload">Upload Ingredients:</label>
          <input type="file" id="ingredientsUpload" @change="uploadIngredients">
        </div>
      </section>

      <!-- Remove Recipes and Ingredients (restricted to staff) -->
      <section v-if="isEmployee" class="remove-section">
        <h2>Remove Recipes and Ingredients</h2>
        <div class="remove-form">
          <label for="removeRecipeSelect">Select Recipe to Remove:</label>
          <select id="removeRecipeSelect" v-model="selectedRecipe">
            <option v-for="recipe in recipes" :key="recipe.id" :value="recipe">{{ recipe.name }}</option>
          </select>
          <button @click="removeRecipe" class="btn">Remove Recipe</button>

          <label for="removeIngredientSelect">Select Ingredient to Remove:</label>
          <select id="removeIngredientSelect" v-model="selectedIngredient">
            <option v-for="ingredient in ingredients" :key="ingredient.id" :value="ingredient">{{ ingredient.name }}</option>
          </select>
          <button @click="removeIngredient" class="btn">Remove Ingredient</button>
        </div>
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

export default {
  name: 'Settings',
  setup() {
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

    const handleSearch = () => {
      console.log('Searching for:', searchQuery.value);
      // Implement search logic here
    };

    const uploadRecipe = (event) => {
      const file = event.target.files[0];
      console.log('Recipe file uploaded:', file);
    };

    const uploadIngredients = (event) => {
      const file = event.target.files[0];
      console.log('Ingredients file uploaded:', file);
    };

    const removeRecipe = () => {
      if (selectedRecipe.value) {
        console.log('Removing recipe:', selectedRecipe.value.name);
        // Logic to remove the selected recipe from inventory
      } else {
        alert('Please select a recipe to remove.');
      }
    };

    const removeIngredient = () => {
      if (selectedIngredient.value) {
        console.log('Removing ingredient:', selectedIngredient.value.name);
        // Logic to remove the selected ingredient from inventory
      } else {
        alert('Please select an ingredient to remove.');
      }
    };

    return {
      logo,
      userProfile,
      isEmployee,
      searchQuery,
      selectedRecipe,
      selectedIngredient,
      recipes,
      ingredients,
      handleSearch,
      uploadRecipe,
      uploadIngredients,
      removeRecipe,
      removeIngredient,
    };
  },
};
</script>

<style scoped>
/* Main container with full background color */
.settings-page-container {
  background-color: #acd0df; /* Apply light blue background to the whole page */
  min-height: 100vh; /* Ensure it covers the full viewport */
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  color: #000000;
}

.nav-links {
  display: flex;
  width: 100%;
  list-style-type: none;
  justify-content: space-between;
}

.left-section {
  display: flex;
  align-items: center;
}

.welcome-text {
  margin-left: 10px;
}

.logo {
  height: 40px;
  margin-right: 10px;
}

.center-section {
  display: flex;
  align-items: center;
}

.inventory-section {
  position: relative;
}

.dropdown {
  display: inline-block;
}

.dropbtn {
  background-color: #7dc9ec; /* Button background */
  color: white; /* Button text color */
  padding: 10px; /* Button padding */
  font-size: 16px; /* Button font size */
  border: none; /* No border */
  cursor: pointer; /* Pointer cursor on hover */
}

.dropdown-content {
  display: none; /* Hide the dropdown content by default */
  position: absolute; /* Position relative to the dropdown */
  background-color: white; /* Dropdown background */
  min-width: 160px; /* Minimum width of the dropdown */
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); /* Dropdown shadow */
  z-index: 1; /* Ensure dropdown is above other elements */
}

.dropdown:hover .dropdown-content {
  display: block; /* Show dropdown on hover */
}

.dropdown-content a {
  color: black; /* Link color */
  padding: 12px 16px; /* Link padding */
  text-decoration: none; /* Remove underline */
  display: block; /* Block display */
}

.dropdown-content a:hover {
  background-color: #f1f1f1; /* Background on hover */
}

/* Search Section */
.search-section {
  display: flex;
  align-items: center;
}

.search-input {
  padding: 5px;
  border-radius: 4px;
}

.search-button {
  padding: 6px 10px;
  background-color: #ebf5f8;
  border-radius: 4px;
  color: #000;
  margin-left: 5px;
}

.search-button:hover {
  background-color: #008ae6;
}

/* Settings section with white background */
.settings-page {
  width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f9f9f9; /* Keep the white background for the section */
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
  background-color: #ff9933;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
  text-decoration: none;
}

.btn:hover {
  background-color: #e68a00;
}
</style>

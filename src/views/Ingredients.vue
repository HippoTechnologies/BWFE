<template>
  <nav class="navbar">
      <ul class="nav-links">
        <!-- Left Side: Home and Welcome Message -->
        <li class="left-section">
          <router-link :to="{ name: 'Home' }" class="nav-link">
            <img :src="logo" alt="Logo" class="logo" />
          </router-link>
          <small class="welcome-text">Hello, {{ employeeName }}</small>
        </li>

        <!-- Center Section: Schedule -->
        <li class="center-section">
          <router-link v-if="isEmployee" to="/schedule" class="nav-link">Schedule</router-link>
        </li>

        <!-- Right Side: Inventory, Search Bar, Cart, and Settings -->
        <li class="right-section">
          <div class="dropdown">
            <button class="dropbtn">Inventory</button>
            <div class="dropdown-content">
              <router-link to="/ingredients">Ingredients</router-link>
              <router-link to="/recipe">Recipe</router-link>
              <router-link to="/sales">Sales</router-link>
            </div>
          </div>

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

          <router-link to="/cart" class="nav-link">
            <i class="fas fa-shopping-cart"></i> Cart
          </router-link>
          <router-link to="/settings" class="nav-link">
            <i class="fas fa-cog"></i> Settings
          </router-link>
        </li>
      </ul>
    </nav>
  <div class="ingredients-container">
    <!-- Navbar -->
 

    <div class="d-flex">
      <!-- Filter Section -->
      <div class="filter-section p-3">
        <h2>Filter Ingredients</h2>
        <p>Category</p>
        <div class="dropdown">
          <select v-model="selectedCategory" @change="filterIngredients" class="form-select">
            <option value="">All Categories</option>
            <option value="Baking">Baking</option>
            <option value="Dairy">Dairy</option>
            <option value="Vegetables">Vegetables</option>
          </select>
        </div>
        <div class="controls mt-3">
          <input v-model="searchQuery" type="text" placeholder="Search ingredients..." class="form-control" />
          <button @click="filterIngredients" class="btn btn-primary mt-2 w-100">Filter</button>
        </div>
      </div>

      <!-- Ingredients Table Section -->
      <div class="ingredients-table flex-grow-1">
        <h2>Ingredients</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ingredient in filteredIngredients" :key="ingredient.id">
              <td>{{ ingredient.name }}</td>
              <td>{{ ingredient.quantity }}</td>
              <td>{{ ingredient.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import logo from '@/assets/logo.png'; // Adjust the path based on your project structure

export default {
  name: 'Ingredients',
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      ingredients: [
        { id: 1, name: 'Flour', quantity: '5 kg', price: '$15.00', category: 'Baking' },
        { id: 2, name: 'Sugar', quantity: '4 kg', price: '$8.00', category: 'Baking' },
        { id: 3, name: 'Eggs', quantity: '12 pcs', price: '$3.00', category: 'Dairy' },
        { id: 4, name: 'Chocolate', quantity: '500 g', price: '$10.00', category: 'Baking' },
        { id: 5, name: 'Butter', quantity: '500 g', price: '$6.00', category: 'Dairy' },
        { id: 6, name: 'Milk', quantity: '1000 ml', price: '$2.50', category: 'Dairy' },
        { id: 7, name: 'Oil', quantity: '300 ml', price: '$1.20', category: 'Baking' },
      ],
      filteredIngredients: [],
      logo: logo,
    };
  },
  methods: {
    filterIngredients() {
      const query = this.searchQuery.toLowerCase();
      this.filteredIngredients = this.ingredients.filter(ingredient => {
        const matchesCategory = this.selectedCategory ? ingredient.category === this.selectedCategory : true;
        const matchesQuery = ingredient.name.toLowerCase().includes(query);
        return matchesCategory && matchesQuery;
      });
    },
  },
  mounted() {
    this.filteredIngredients = this.ingredients;

    // Dynamically load Font Awesome for the cart icon
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(link);
  },
};
</script>

<style scoped>
.ingredients-container {
  padding: 20px;
  background-color: #acd0df;
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

.right-section {
  display: flex;
  align-items: center;
}

.dropdown {
  position: relative;
}

.dropbtn {
  background-color: #dadada;
  padding: 14px 20px;
  font-size: 16px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  min-width: 160px;
  z-index: 1;
}

.dropdown-content a {
  padding: 12px 16px;
  display: block;
  text-decoration: none;
  color: #000;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.nav-link {
  padding: 14px 20px;
  text-decoration: none;
  color: #000;
}

.nav-link:hover {
  background-color: #575757;
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
  background-color: #ff9933;
  border-radius: 4px;
  color: #000;
  margin-left: 5px;
}

.search-button:hover {
  background-color: #e68a00;
}

/* Styles for the filter section and ingredients table */
.d-flex {
  display: flex;
}

.filter-section {
  width: 250px;
  background-color: #acd0df;
  border-radius: 10px;
  padding: 20px;
  margin-right: 20px;
}

.ingredients-table {
  flex-grow: 1;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f4f4f4;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    background-color: #333;
  }

  .left-section,
  .center-section,
  .right-section {
    width: 100%;
    justify-content: space-between;
  }

  .nav-link {
    padding: 10px;
    width: 100%;
    text-align: left;
  }

  .d-flex {
    flex-direction: column;
  }

  .filter-section {
    margin-right: 0;
    margin-bottom: 20px;
  }
}
</style>

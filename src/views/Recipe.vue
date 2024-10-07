<template>
  <div>
    <!-- Navigation Bar -->
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

    <!-- Main Content -->
    <div class="recipe-container">
      <h2>Recipes</h2>
      <div class="d-flex flex-column flex-md-row">
        <!-- Filter Section -->
        <div class="filter-section p-3">
          <h2>Filter Products</h2>
          <p>Category</p>
          <div class="dropdown">
            <select v-model="selectedCategory" @change="filterRecipes" class="form-select">
              <option value="">All Categories</option>
              <option value="Cakes">Cakes</option>
              <option value="Cupcakes">Cupcakes</option>
              <option value="Tarts">Tarts</option>
            </select>
          </div>
          <div class="controls mt-3">
            <input v-model="searchQuery" type="text" placeholder="Search recipes..." class="form-control" />
            <button @click="filterRecipes" class="btn btn-primary mt-2 w-100">Filter</button>
          </div>
        </div>

        <!-- Recipe Grid Section -->
        <div class="recipe-grid flex-grow-1">
          <div class="row">
            <div class="col-md-4" v-for="recipe in filteredRecipes" :key="recipe.id">
              <div class="recipe-card">
                <img :src="recipe.image" alt="Recipe Image" class="recipe-image img-fluid" />
                <div class="recipe-details">
                  <h3>{{ recipe.name }}</h3>
                  <p><strong></strong> {{ recipe.description }}</p>
                  <p><strong></strong> ${{ recipe.price.toFixed(2) }}</p>
                  <button type="button" class="btn btn-primary w-100" data-bs-toggle="modal" :data-bs-target="'#recipeModal' + recipe.id">
                    View Recipe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bootstrap Modal for Viewing Recipe Details -->
      <div
        class="modal fade"
        v-for="recipe in filteredRecipes"
        :id="'recipeModal' + recipe.id"
        tabindex="-1"
        aria-labelledby="recipeModalLabel"
        aria-hidden="true"
        key="modal"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="recipeModalLabel">{{ recipe.name }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img :src="recipe.image" alt="Recipe Image" class="img-fluid mb-3" />
              <p><strong>Ingredients:</strong> {{ recipe.ingredients.join(', ') }}</p>
              <p><strong>Description:</strong> {{ recipe.description }}</p>
              <p><strong>Price:</strong> ${{ recipe.price.toFixed(2) }}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import logo from '@/assets/logo.png';

export default {
  name: 'Recipe',
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      priceRange: 20, // Default max price
      recipes: [
        { id: 1, name: 'Chocolate Cake', description: 'A rich and moist chocolate cake.', ingredients: ['Flour', 'Sugar', 'Cocoa'], price: 15.00, image: 'src/assets/images/img11.JPG', category: 'Cakes' },
        { id: 2, name: 'Croissant', description: 'Flaky and buttery croissants.', ingredients: ['Flour', 'Sugar', 'Vanilla'], price: 10.00, image: 'src/assets/images/img22.JPG', category: 'Cupcakes' },
        { id: 3, name: 'Cupcake', description: 'Delicious chocolate cupcakes.', ingredients: ['Flour', 'Lemon', 'Sugar'], price: 12.00, image: 'src/assets/images/img33.JPG', category: 'Tarts' },
      ],
      filteredRecipes: []
    };
  },
  setup() {
    const logoUrl = ref(logo);

    return { logo: logoUrl };
  },
  methods: {
    filterRecipes() {
      const query = this.searchQuery.toLowerCase();
      this.filteredRecipes = this.recipes.filter(recipe => {
        const matchesCategory = this.selectedCategory ? recipe.category === this.selectedCategory : true;
        const matchesQuery = recipe.name.toLowerCase().includes(query);
        const matchesPrice = recipe.price <= this.priceRange;
        return matchesCategory && matchesQuery && matchesPrice;
      });
    },
    addToCart(recipe) {
      alert(`${recipe.name} added to cart!`);
    }
  },
  mounted() {
    this.filteredRecipes = this.recipes;

    // Load Font Awesome for icons
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(link);
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  color: #000000;
}.navbar {
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


/* Responsive Styles */
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
}

.recipe-container {
  padding: 20px;
  background-color: #96cde2;
}

.d-flex {
  display: flex;
  flex-direction: column; /* Stack items in a column on small screens */
}

.filter-section {
  width: 250px;
  background-color: #96cde2;
  border-radius: 10px;
  padding: 20px;
  margin-right: 20px;
}

.recipe-grid {
  flex-grow: 1; /* Allow grid to take up remaining space */
}

.recipe-card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 15px;
}

.recipe-image {
  border-radius: 10px;
  width: 800px; /* Set width to 300 pixels */
  height: 300px; /* Set height to 300 pixels */
  object-fit: cover; /* Ensure the image covers the area */
}

.recipe-details {
  text-align: center;
}

.modal-body img {
  width: 100%;
  height: auto;
}
</style>

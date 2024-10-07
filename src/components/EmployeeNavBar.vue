<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
    <div class="container-fluid">
      <a class="navbar-brand fancy-font" href="#">Bakery</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link fs-5" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="isEmployee" to="/schedule" class="nav-link fs-5">Schedule</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fs-5" to="/products">Products</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle fs-5" href="#" id="inventoryDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Inventory
            </a>
            <ul class="dropdown-menu" aria-labelledby="inventoryDropdown">
              <li><router-link class="dropdown-item" to="/ingredients">Ingredients</router-link></li>
              <li><router-link class="dropdown-item" to="/recipe">Recipes</router-link></li>
              <li><router-link class="dropdown-item" to="/sales">Sales</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="d-flex align-items-center ms-auto">
        <router-link to="/settings" class="nav-link fs-5">
          <i class="fas fa-cog"></i> Settings
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'EmployeeNavBar',
  data() {
    return {
      isEmployee: true // Example data, replace with actual logic
    };
  }
};
</script>

<style scoped>
.custom-navbar {
  height: 100px; /* Increased height */
  font-size: 1.5rem; /* Increased font size */
}

.fancy-font {
  font-family: 'Pacifico', cursive;
  font-size: 2rem; /* Adjust the size as needed */
}
</style>
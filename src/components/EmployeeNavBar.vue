<template>
  <nav class="navbar navbar-expand-lg navbar-light custom-navbar">
    <div class="container-fluid">
      <a class="navbar-brand fancy-font" href="#">
        <img src="@/assets/images/HippoTech2.png" alt="Bakery Logo" style="height: 95px;">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#employeeNavbarNav" aria-controls="employeeNavbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="employeeNavbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/schedule">Schedule</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Bakery
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link class="dropdown-item" to="/recipe">Recipes</router-link></li>
              <li><router-link class="dropdown-item" to="/sales">Sales</router-link></li>
              <li><router-link class="dropdown-item" to="/ingredients">Inventory</router-link></li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- Settings Link with Left Margin Adjusted -->
      <div class="d-flex align-items-center ms-auto me-2">
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

.navbar {
  background-color: #FFFDEF; 
  color: #290102;
}

.navbar .nav-link {
  color: #290102; /* Set nav links color */
}

.navbar-menu li {
  margin: 0 15px;
  position: relative;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #FFFDEF;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px 0;
  margin: 0;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu li {
  padding: 5px 20px;
}

.dropdown-menu a {
  font-size: 1.25rem; /* Make dropdown links the same size */
  color: #290102;
}

.navbar-settings a {
  text-decoration: none;
  color: #290102;
  margin-left: 10px; /* Adjust margin-left to move it slightly left */
}
</style>

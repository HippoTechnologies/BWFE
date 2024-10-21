<template>
  <nav class="navbar custom-navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand fancy-font" href="#">
        <img src="@/assets/images/HippoTech2.png" alt="Bakery Logo" class="logo-image">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact Us</router-link>
          </li>
        </ul>
      </div>
      <div class="d-flex align-items-center ms-auto">
        <router-link class="nav-link" to="/login">Login</router-link>
        <div class="cart-icon ms-4">
          <i class="fas fa-shopping-cart"></i>
          <span class="badge bg-primary">{{ cartItemCount }}</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      cartItemCount: 0 // Initialize cartItemCount
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

.navbar a {
  color: #290102; /* Set nav links color */
}

.logo-image {
  height: 110px; /* Adjust the height as needed */
  width: auto; /* Maintain aspect ratio */
}

.cart-icon {
  position: relative;
  left: -10px; /* Adjust the position */
  display: flex;
  align-items: center;
  font-size: 2rem; /* Increased cart icon size */
}

.cart-icon .badge {
  position: absolute;
  top: -10px;
  right: -15px;
  font-size: 0.75rem; /* Smaller badge size */
  padding: 0.25em 0.5em; /* Adjust padding for better appearance */
  border-radius: 50%; /* Make the badge round */
  color: #290102; /* Ensure the text color is white */
  background-color: #CDC69A !important;
}
</style>

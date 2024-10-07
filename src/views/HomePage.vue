<template>
  <div>
    <section class="d-flex justify-content-center align-items-center position-relative" style="height: 100vh;">
      <!-- Carousel -->
      <div id="productCarousel" class="carousel slide position-absolute w-100 h-100" data-bs-ride="carousel" data-bs-interval="4000">
        <div class="carousel-inner h-100">
          <div class="carousel-item active h-100">
            <img src="@/assets/images/Pastries.png" class="d-block w-100 h-100 object-fit-cover" alt="Product 1">
          </div>
          <div class="carousel-item h-100">
            <img src="@/assets/images/Pastries2.png" class="d-block w-100 h-100 object-fit-cover" alt="Product 2">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- Overlay Content -->
      <div class="position-relative text-center text-white">
        <h1 class="mt-5">Welcome to Our Bakery!</h1>
        <p>Delicious treats made fresh daily.</p>
      </div>
    </section>
  </div>
</template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
<style scoped>
  .carousel-item img {
    object-fit: cover;
  }
  .position-relative {
    z-index: 1;
  }
  .text-center {
    z-index: 2;
  }
</style>
  
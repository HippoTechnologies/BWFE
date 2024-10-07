<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <!-- Filter Section -->
      <div class="col-md-2">
        <h4>Filter Products</h4>
        <div class="mb-3">
          <label for="category" class="form-label">Category</label>
          <select id="category" class="form-select" v-model="selectedCategory">
            <option value="">All</option>
            <option value="cakes">Cakes</option>
            <option value="pastries">Pastries</option>
            <option value="cookies">Cookies</option>
          </select>
        </div>
      </div>
      <!-- Products Section -->
      <div class="col-md-10">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4" v-for="product in filteredProducts" :key="product.id">
            <div class="card h-100">
              <img :src="product.image" class="card-img-top" :alt="product.name">
              <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">{{ product.description }}</p>
                <p class="card-text"><strong>{{ product.price }}</strong></p>
                <button class="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chocolateCakeImage from '@/assets/images/chocolate_cake.png';
import croissantImage from '@/assets/images/crossiant.png';
import cupcakeImage from '@/assets/images/cupcake.png';
import macaronImage from '@/assets/images/macroons.png';

export default {
  name: 'ProductsPage',
  data() {
    return {
      selectedCategory: '',
      products: [
        { id: 1, name: 'Chocolate Cake', description: 'Delicious chocolate cake', price: '$10', image: chocolateCakeImage, category: 'cakes' },
        { id: 2, name: 'Croissant', description: 'Flaky and buttery croissant', price: '$3', image: croissantImage, category: 'pastries' },
        { id: 3, name: 'Cupcake', description: 'Sweet and colorful cupcake', price: '$2', image: cupcakeImage, category: 'cakes' },
        { id: 4, name: 'Macaron', description: 'Delicate and delicious macarons', price: '$5', image: macaronImage, category: 'cookies' },
        // Add more products as needed
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        return (
          this.selectedCategory === '' || product.category === this.selectedCategory
        );
      });
    },
  },
};
</script>

<style scoped>
.image-container {
  height: 200px; /* Reduced height for the image container */
  overflow: hidden; /* Hide any overflow */
}
</style>
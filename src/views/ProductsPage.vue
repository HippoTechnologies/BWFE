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
                <button class="add-to-cart-btn">Add to Cart</button>
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
import croissantImage from '@/assets/images/crossiant2.png';
import cupcakeImage from '@/assets/images/cupcake2.png';
import macaronImage from '@/assets/images/macroons.png';
import chocoCookie from '@/assets/images/cookie.png';
import pigsBlanket from '@/assets/images/PigsBlanket.png';

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
        { id: 5, name: 'Chocolate Chip Cookie', description: 'Delicious and chewy cookie', price: '$1', image: chocoCookie, category: 'cookies' },
        { id: 6, name: 'Pigs in a Blanket', description: 'Delicate and delicious Pigs in a Blanket', price: '$3', image: pigsBlanket, category: 'pastries' },
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
.card {
  background-color: #FFFDEF; /* Change this to your desired card color */
  color: #290102;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
  padding: 10px; /* Add padding inside the card */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  border-radius: 8px; /* Optional: Add rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow */
}

.form-select {
  background-color: #FFFDEF; /* Change this to your desired dropdown background color */
  color: #290102;
}

.add-to-cart-btn {
  background-color: #290102; 
  color: #FFFDEF; 
  align-items: center; /* Center content horizontally */
  border: none; /* Remove border */
  border-radius: 40px; /* Add rounded corners */
  padding: 20px; /* Increase padding for a larger button */
  cursor: pointer; /* Change cursor to pointer on hover */
  font-size: 1.3rem; 
}

.add-to-cart-btn:hover {
  background-color: #3a0b0b; /* Optional: Change background color on hover */
  color: #FFFDEF;
}
</style>
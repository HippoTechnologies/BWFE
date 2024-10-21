<template>
  <div class="ingredients-container">
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
          <button @click="filterIngredients" class="btn filter-btn mt-2 w-100">Filter</button>
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
}

/* Styles for the filter section and ingredients table */
.d-flex {
  display: flex;
}

.filter-section {
  width: 250px;
  border-radius: 10px;
  padding: 20px;
  margin-right: 20px;
}

.ingredients-table {
  flex-grow: 1;
  background-color: #FFFDEF;
  color: #290102;
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

.filter-btn{
  background-color: #290102;
  color: #FFFDEF;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.filter-btn:hover {
  background-color: #FFFDEF;
  color: #290102;
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

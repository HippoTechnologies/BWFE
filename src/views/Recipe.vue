<template>
  <div class="recipes-container">
    <div class="d-flex">
      <!-- Filter Section -->
      <div class="filter-section p-3">
        <h2>Filter Recipes</h2>
        <p>Category</p>
        <div class="dropdown">
          <select v-model="selectedCategory" @change="filterRecipes" class="form-select">
            <option value="">All Categories</option>
            <option value="Baking">Cake</option>
            <option value="Dairy">Bread</option>
            <option value="Vegetables">Gluten-Free</option>
          </select>
        </div>
        <div class="controls mt-3">
          <input v-model="searchQuery" type="text" placeholder="Search recipes..." class="form-control" />
          <button @click="filterRecipes" class="btn btn-primary mt-2 w-100">Filter</button>
        </div>
      </div>
<div>

</div>
      <!-- Recipes Table Section -->
      <div class="recipes-table flex-grow-1">
        <b-container>
          <b-row class="d-flex justify-content-between align-items-center my-2">
            <b-col cols="auto">
              <h2>Recipes</h2>
            </b-col>
            <b-col cols="auto">
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addRecipeForm">
                Add Recipe
              </button>
            </b-col>
          </b-row>
        </b-container>
        
        <AddRecipeForm @close-modal="closeAddRecipeForm"/>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Rating</th>
              <th>Prep Time</th>
              <th>Cook Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="recipe in filteredRecipes" :key="recipe.id">
              <td>{{ recipe.name }}</td>
              <td>{{ recipe.description }}</td>
              <td>{{ recipe.rating }}</td>
              <td>{{ recipe.prepTime }} {{ recipe.prepUnit }}</td>
              <td>{{ recipe.cookTime }} {{ recipe.cookUnit }}</td>
              <td>
                <div class="d-flex">
                  <button @click="selectRecipe(recipe)" class="btn btn-warning btn-sm me-2" data-bs-toggle="modal" data-bs-target="#editRecipeForm" :id="recipe.id + 'editButton'">Edit</button>
                  <button @click="selectRecipe(recipe)" class="btn btn-warning btn-sm me-2" data-bs-toggle="modal" data-bs-target="#viewRecipeForm" :id="recipe.id + 'viewButton'">View</button>
                  <button @click="deleteRecipe(recipe.id)" class="btn btn-danger btn-sm">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <EditRecipeForm :recipe="selectedRecipe" v-if="selectedRecipe" :title="'ID: '" @close-modal="closeEditRecipeForm"/>
        <ViewRecipeForm :recipe="selectedRecipe" v-if="selectedRecipe" :title="'ID: '" @close-modal="closeViewRecipeForm"/>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import logo from '@/assets/logo.png'; // Adjust the path based on your project structure
import axios from 'axios'; // Make sure to import axios
import { Modal } from 'bootstrap'
import Swal from 'sweetalert2';
import AddRecipeForm from './../components/AddRecipeForm.vue';
import EditRecipeForm from './../components/EditRecipeForm.vue';
import ViewRecipeForm from './../components/ViewRecipeForm.vue'


export default {
  name: 'Recipes',
  components: {
    AddRecipeForm,
    EditRecipeForm,
    ViewRecipeForm,
  },
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      recipes: [],
      filteredRecipes: [],
      loading: true,
      error: null,
      logo: logo,
      selectedRecipe: {
          id: '0',
          name: 'NULL',
          quantity: 0,
          purchaseQuantity: 0,
          costPerPurchaseUnit: 0,
          unit: 'NULL',
          notes: 'NULL'
        },
    };
  },
  created() {
    this.getRecipes();
  },
  methods: {

    async getRecipes() {
      this.recipes = [
        { id: 1, name: 'German Chocolate Cake', description: 'German cake', rating: '5', prepTime: "80", prepUnit: "hrs", cookTime: "20", cookUnit: "minutes"},
        { id: 2, name: 'Lemon Tart', description: 'Tart sweet', rating: '5', prepTime: "80", prepUnit: "hrs", cookTime: "20", cookUnit: "minutes" },
        { id: 3, name: 'Tres Leches', description: '3 milk cake', rating: '5', prepTime: "80", prepUnit: "hrs", cookTime: "20", cookUnit: "minutes" },
        { id: 4, name: 'Croissant', description: 'Flaky and rich bread', rating: '5', prepTime: "80", prepUnit: "hrs", cookTime: "20", cookUnit: "minutes" },
      ];
      this.loading = true;
      try {
        const response = await axios.get('https://bakery.permavite.com/api/recipes', {
          headers: {
            'Authorization': `${sessionStorage.getItem('SessionId')}`
          },
        });
        console.log(response);
        this.recipes = response.data;
        this.filteredRecipes = this.recipes; // Initialize filtered recipes
        /*
        "id": "12b57d0c-1ce6-4882-93b0-05b5ff50db1a",
        "name": "Ostrich Eggs",
        "quantity": 1000,
        "purchaseQuantity": 59,
        "costPerPurchaseUnit": 70.4,
        "unit": "Egg(s)",
        "notes": "Ostrich Eggs used for Baking!"
        */
        console.log(response.data)
        this.$emit('close');
      } catch (error) {
        console.error('Error retrieving recipes:', error);
        this.recipes = [
        { id: 1, name: 'Flour', quantity: '5 kg', price: '$15.00'},
        { id: 2, name: 'Sugar', quantity: '4 kg', price: '$8.00', category: 'Baking' },
        { id: 3, name: 'Eggs', quantity: '12 pcs', price: '$3.00', category: 'Dairy' },
        { id: 4, name: 'Chocolate', quantity: '500 g', price: '$10.00', category: 'Baking' },
        { id: 5, name: 'Butter', quantity: '500 g', price: '$6.00', category: 'Dairy' },
        { id: 6, name: 'Milk', quantity: '1000 ml', price: '$2.50', category: 'Dairy' },
        { id: 7, name: 'Oil', quantity: '300 ml', price: '$1.20', category: 'Baking' },
      ];
      } finally {
        this.loading = false; // Set loading to false
        this.recipes = [
        { id: 1, name: 'Flour', quantity: '5 kg', price: '$15.00'},
        { id: 2, name: 'Sugar', quantity: '4 kg', price: '$8.00', category: 'Baking' },
        { id: 3, name: 'Eggs', quantity: '12 pcs', price: '$3.00', category: 'Dairy' },
        { id: 4, name: 'Chocolate', quantity: '500 g', price: '$10.00', category: 'Baking' },
        { id: 5, name: 'Butter', quantity: '500 g', price: '$6.00', category: 'Dairy' },
        { id: 6, name: 'Milk', quantity: '1000 ml', price: '$2.50', category: 'Dairy' },
        { id: 7, name: 'Oil', quantity: '300 ml', price: '$1.20', category: 'Baking' },
      ];
      }
    },
    async deleteRecipe(id) {
      try {
        const response = await axios.delete('https://bakery.permavite.com/api/recipes/'+ id, {
          headers: {
            'Authorization': `${sessionStorage.getItem("SessionId")}`,
            scheme: 'https',
          },
        });
        this.getRecipes();
        console.log(response);
        Swal.fire({
          title: "Deleted!",
          text: "",
          icon: "success"
        });
      } catch (e) {
        console.error('Error deleting item:', e);
        Swal.fire({
          title: "Error!",
          text: e,
          icon: "error"
        });
      } finally {
        this.loading = false; // Set loading to false
      }
    },
    filterRecipes() {
      const query = this.searchQuery.toLowerCase();
      this.filteredRecipes = this.recipes.filter(recipe => {
        const matchesCategory = this.selectedCategory ? recipe.notes.includes(this.selectedCategory): true;
        const matchesQuery = recipe.name.toLowerCase().includes(query);
        return matchesCategory && matchesQuery;
      });
    },
    closeAddRecipeForm() {
      const closeButton = document.getElementById('closeAddRecipeForm');
      closeButton.click();
      this.getRecipes();
      
      //const modalElement = document.getElementById('recipeForm');
      //const modal = Modal.getInstance(modalElement);    
      //modal.toggle();
      // You may want to also refresh the recipes list here if necessary
    },
    selectRecipe(recipe) {
      this.selectedRecipe = recipe;
    },
    closeEditRecipeForm() {
      const closeButton = document.getElementById('closeEditRecipeForm');
      closeButton.click();
      this.getRecipes();
      
      //const modalElement = document.getElementById('recipeForm');
      //const modal = Modal.getInstance(modalElement);    
      //modal.toggle();
      // You may want to also refresh the recipes list here if necessary
    },
    closeViewRecipeFOrm() {
      const closeButton = document.getElementById('closeViewRecipeForm');
      closeButton.click();
      this.getRecipes();
      
      //const modalElement = document.getElementById('recipeForm');
      //const modal = Modal.getInstance(modalElement);    
      //modal.toggle();
      // You may want to also refresh the recipes list here if necessary
    }
  },
  mounted() {
    this.filteredRecipes = this.recipes;

    // Dynamically load Font Awesome for the cart icon
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(link);

    
  },
};
</script>

<style scoped>
.recipes-container {
  padding: 20px;
  background-color: #a7292f;
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

/* Styles for the filter section and recipes table */
.d-flex {
  display: flex;
}

.filter-section {
  width: 250px;
  background-color: #a7292f;
  border-radius: 10px;
  padding: 20px;
  margin-right: 20px;
}

.recipes-table {
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
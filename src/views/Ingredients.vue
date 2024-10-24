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
<div>

</div>
      <!-- Ingredients Table Section -->
      <div class="ingredients-table flex-grow-1">
        <b-container>
          <b-row class="d-flex justify-content-between align-items-center my-2">
            <b-col cols="auto">
              <h2>Ingredients</h2>
            </b-col>
            <b-col cols="auto">
              <button type="button" class="btn add-ingredient-btn" data-bs-toggle="modal" data-bs-target="#addIngredientForm">
                Add Ingredient
              </button>
            </b-col>
          </b-row>
        </b-container>
        
        <AddIngredientForm @close-modal="closeAddIngredientForm"/>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>PurchaseQuantity</th>
              <th>costPerPurchaseUnit</th>
              <th>Unit</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ingredient in filteredIngredients" :key="ingredient.id">
              <td>{{ ingredient.name }}</td>
              <td>{{ ingredient.quantity }}</td>
              <td>{{ ingredient.purchaseQuantity }}</td>
              <td>{{ ingredient.costPerPurchaseUnit }}</td>
              <td>{{ ingredient.unit }}</td>
              <td>{{ ingredient.notes }}</td>
           
              <td>
                <div class="d-flex">
                  <button @click="selectIngredient(ingredient)" class="btn btn-warning btn-sm me-2" data-bs-toggle="modal" data-bs-target="#editIngredientForm" :id="ingredient.id + 'editButton'">Edit</button>
                  <button @click="deleteIngredient(ingredient.id)" class="btn btn-danger btn-sm">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <EditIngredientForm :ingredient="selectedIngredient" v-if="selectedIngredient" :title="'ID: '" @close-modal="closeEditIngredientForm"/>
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
import AddIngredientForm from './../components/AddIngredientForm.vue';
import EditIngredientForm from './../components/EditIngredientForm.vue';

export default {
  name: 'Ingredients',
  components: {
    AddIngredientForm,
    EditIngredientForm,
  },
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      ingredients: [],
      filteredIngredients: [],
      loading: true,
      error: null,
      logo: logo,
      selectedIngredient: {
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
    this.getIngredients();
  },
  methods: {

    async getIngredients() {
      this.loading = true;
      try {
        const response = await axios.get('https://bakery.permavite.com/api/inventory', {
          headers: {
            'Authorization': `${sessionStorage.getItem('SessionId')}`
          },
        });
        console.log(response);
        this.ingredients = response.data;
        this.filteredIngredients = this.ingredients; // Initialize filtered ingredients
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
        console.error('Error retrieving ingredients:', error);
        this.ingredients = [
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
      }
    },
    async deleteIngredient(id) {
      try {
        const response = await axios.delete('https://bakery.permavite.com/api/inventory/id/'+ id, {
          headers: {
            'Authorization': `${sessionStorage.getItem("SessionId")}`,
            scheme: 'https',
          },
        });
        this.getIngredients();
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
    filterIngredients() {
      const query = this.searchQuery.toLowerCase();
      this.filteredIngredients = this.ingredients.filter(ingredient => {
        const matchesCategory = this.selectedCategory ? ingredient.notes.includes(this.selectedCategory): true;
        const matchesQuery = ingredient.name.toLowerCase().includes(query);
        return matchesCategory && matchesQuery;
      });
    },
    closeAddIngredientForm() {
      const closeButton = document.getElementById('closeAddIngredientForm');
      closeButton.click();
      this.getIngredients();
      
      //const modalElement = document.getElementById('ingredientForm');
      //const modal = Modal.getInstance(modalElement);    
      //modal.toggle();
      // You may want to also refresh the ingredients list here if necessary
    },
    selectIngredient(ingredient) {
      this.selectedIngredient = ingredient;
    },
    closeEditIngredientForm() {
      const closeButton = document.getElementById('closeEditIngredientForm');
      closeButton.click();
      this.getIngredients();
      
      //const modalElement = document.getElementById('ingredientForm');
      //const modal = Modal.getInstance(modalElement);    
      //modal.toggle();
      // You may want to also refresh the ingredients list here if necessary
    }
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

.add-ingredient-btn {
  background-color: #290102;
  color: #FFFDEF;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.add-ingredient-btn:hover {
  background-color: #FFFDEF;
  color: #290102;
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
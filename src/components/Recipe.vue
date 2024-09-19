<template>
    <div class="recipe">
      <h2>Recipes</h2>
      <div class="controls">
        <input v-model="searchQuery" type="text" placeholder="Search recipes..." />
        <button @click="filterRecipes">Filter</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="recipe in filteredRecipes" :key="recipe.id">
            <td>{{ recipe.name }}</td>
            <td>{{ recipe.ingredients.join(', ') }}</td>
            <td>{{ recipe.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Recipe',
    data() {
      return {
        searchQuery: '',
        recipes: [
          { id: 1, name: 'Chocolate Cake', ingredients: ['Flour', 'Sugar', 'Cocoa'], price: '$15.00' },
          { id: 2, name: 'Vanilla Cupcakes', ingredients: ['Flour', 'Sugar', 'Vanilla'], price: '$10.00' },
          { id: 3, name: 'Lemon Tart', ingredients: ['Flour', 'Lemon', 'Sugar'], price: '$12.00' },
          // Add more recipes as needed
        ],
        filteredRecipes: []
      };
    },
    methods: {
      filterRecipes() {
        this.filteredRecipes = this.recipes.filter(recipe =>
          recipe.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    mounted() {
      this.filteredRecipes = this.recipes;
    }
  };
  </script>
  
  <style scoped>
  .recipe {
    padding: 20px;
  }
  
  .controls {
    margin-bottom: 20px;
  }
  
  input[type="text"] {
    padding: 8px;
    margin-right: 10px;
  }
  
  button {
    padding: 8px 12px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  th {
    background-color: #f4f4f4;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  </style>
  
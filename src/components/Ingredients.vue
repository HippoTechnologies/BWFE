<template>
    <div class="ingredients">
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
          <tr v-for="ingredient in ingredients" :key="ingredient.id">
            <td>{{ ingredient.name }}</td>
            <td>{{ ingredient.quantity }}</td>
            <td>{{ ingredient.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Ingredients',
    data() {
      return {
        ingredients: [
          { id: 1, name: 'Flour', quantity: '10 kg', price: '$20.00' },
          { id: 2, name: 'Sugar', quantity: '5 kg', price: '$10.00' },
          { id: 3, name: 'Eggs', quantity: '30 pcs', price: '$7.00' },
          // Add more ingredients as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .ingredients {
    padding: 20px;
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
  
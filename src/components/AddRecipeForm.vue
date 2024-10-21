<template>

    <div>
  
      <!-- Modal -->
      <div class="modal fade" id="addRecipeForm" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
  
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel">{{ title }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
  
            <div class="modal-body">
              <form @submit.prevent="addRecipe">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" v-model="name" required>
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label">Description</label>
                  <input type="text" class="form-control" id="description" v-model="description" required>
                </div>
                <div class="mb-3">
                  <label for="prepUnit" class="form-label">Prep Unit</label>
                  <input type="text" class="form-control" id="prepUnit" v-model="prepUnit" required>
                </div>
                <div class="mb-3">
                  <label for="cookUnit" class="form-label">Cook Unit</label>
                  <input type="text" class="form-control" id="cookUnit" v-model="cookUnit" required>
                </div>
                <div class="mb-3">
                  <label for="rating" class="form-label">Rating</label>
                  <input type="number" step="0.01" class="form-control" id="rating" v-model="rating" required>
                </div>
                <div class="mb-3">
                  <label for="prepTime" class="form-label">Prep Time</label>
                  <input type="number" step="0.01" class="form-control" id="prepTime" v-model="prepTime" required>
                </div>
                <div class="mb-3">
                    <label for="cookTime" class="form-label">Cook Time</label>
                    <input type="number" step="0.01" class="form-control" id="cookTime" v-model="cookTime" required>
                </div>
                <button id="submitRecipe" type="submit" class="btn btn-primary w-100" data-bs-dismiss="">Submit</button>
              </form>
            </div>
            
            <div class="modal-footer">
              <button id="closeAddRecipeForm" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
  
          </div>
        </div>
      </div>
  
    </div>
  
  </template>
  
  <script>
    import axios from 'axios';
    import Swal from 'sweetalert2';
  
  export default {
    name: 'AddRecipeForm',
    props: {
      title: {
        type: String,
        default: 'Recipe'
      },
      bodyText: {
        type: String,
        default: 'This shouldnt show'
      }
    },
    data() {
      return {
        /*name: '',
        quantity: 0,
        purchaseQuantity: 0,
        costPerPurchaseUnit: 0,
        unit: '',
        notes: ''*/
        name: '',
        description: '',
        prepUnit: '',
        cookUnit: '',
        rating: 0,
        prepTime: 0,
        cookTime: 0,
      };
    },
    methods: {
      async addRecipe() {
        var input = {
          name: this.name,
          description: this.description,
          prepUnit: this.prepUnit,
          cookUnit: this.cookUnit,
          rating: this.rating,
          prepTime: this.prepTime,
          cookTime: this.cookTime
        }
  
        const headers = {
            'Content-Type': 'application/json', // Specify content type
            'Authorization': `${sessionStorage.getItem('SessionId')}`, // Add an authorization token
        };
        console.log(input);
  
        try {
          /* 
            Name = init.Name,
            Description = init.Description,
            PrepUnit = init.PrepUnit,
            CookUnit = init.CookUnit,
            Rating = init.Rating,
            PrepTime = init.PrepTime,
            CookTime = init.CookTime
          */
          const response = await axios.post('https://bakery.permavite.com/api/recipes', input, { headers });
  
  
          this.$emit('close-modal');
          this.name = '';
          this.quantity = 0;
          this.purchaseQuantity = 0;
          this.costPerPurchaseUnit = 0;
          this.unit = '';
          this.notes = '';
          Swal.fire({
            title: "Recipe added!",
            text: "",
            icon: "success"
          });
        } catch (e) {
          Swal.fire({
            title: "Error!",
            text: e,
            icon: "error"
          });
        };
      }
    }
  };
  </script>
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
                <label for="quantity" class="form-label">Description</label>
                <input type="text" step="0.01" class="form-control" id="quantity" v-model="description" required>
              </div>
              <div class="mb-3">
                <label for="purchaseQuantity" class="form-label">Rating</label>
                <input type="number" step="0.01" class="form-control" id="purchaseQuantity" v-model="rating" required>
              </div>
              <div class="mb-3">
                <label for="costPerPurchaseUnit" class="form-label">Prep Time</label>
                <input type="number" step="0.01" class="form-control" id="costPerPurchaseUnit" v-model="prepTime" required>
              </div>
              <div class="mb-3">
                <label for="costPerPurchaseUnit" class="form-label">Prep Unit</label>
                <input type="text" step="0.01" class="form-control" id="costPerPurchaseUnit" v-model="prepUnit" required>
              </div>
              <div class="mb-3">
                <label for="unit" class="form-label">Cook Time</label>
                <input type="number" class="form-control" id="unit" v-model="cookTime" required>
              </div>
              <div class="mb-3">
                <label for="unit" class="form-label">Cook Unit</label>
                <input type="text" class="form-control" id="unit" v-model="cookUnit" required>
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
      id: '0',
      name: '',
      description: "",
      rating: 0,
      prepTime: 0,
      prepUnit: "",
      cookTime: 0,
      cookUnit: "",
    };
  },
  methods: {
    async addRecipe() {
      var input = {
        id: this.id,
        name: this.name,
        description: this.description,
        rating: this.rating,
        prepTime: this.prepTime,
        prepUnit: this.prepUnit,
        cookTime: this.cookTime,
        cookUnit: this.cookUnit,
      }

      const headers = {
          'Content-Type': 'application/json', // Specify content type
          'Authorization': `${sessionStorage.getItem('SessionId')}`, // Add an authorization token
      };
      console.log(input);

      try {
        /* 
          Id = Guid.NewGuid().ToString(),
          Name = init.Name,
          Quantity = init.Quantity,
          PurchaseQuantity = init.PurchaseQuantity,
          CostPerPurchaseUnit = init.CostPerPurchaseUnit,
          Unit = init.Unit,
          Notes = init.Notes
        */
        const response = await axios.post('https://bakery.permavite.com/api/recipes', input, { headers });


        this.$emit('close-modal');
        this.name = '';
        this.description = '';
        this.rating = 0;
        this.prepTime = 0;
        this.prepUnit = '';
        this.cookTime = 0;
        this.cookUnit = '';
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

<style>
/* Add any additional styles here if needed */
</style>
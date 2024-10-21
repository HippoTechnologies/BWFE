<template>

  <div>

    <!-- Modal -->
    <div class="modal fade" id="viewRecipeForm" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title" id="modalLabelTitle">{{ title }} {{ id }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <form @submit.prevent="getIngredients">
              
              <div class="ingredients">
                <h5>Ingredients:</h5>
                <ul>
                  <li v-for="ingredient in ingredients" :key="ingredient.id">
                    {{ ingredient.name }} (Quantity: {{ ingredient.quantity }} Minimum Quantity: {{ ingredient.minQuantity }} Unit: {{ ingredient.unit }})
                  </li>
                </ul>
              </div>

              <div class="cooksteps">
                <h5>Cooksteps:</h5>
                <ul>
                  <li v-for="cookstep in cooksteps" :key="cookstep.id">
                    {{ cookstep.id }} ({{ cookstep.description }})
                  </li>
                </ul>
              </div>

              <button id="submitRecipe" type="submit" class="btn btn-primary w-100" data-bs-dismiss="">Edit</button>
            </form>
          </div>
          
          <div class="modal-footer">
            <button id="closeViewRecipe" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
  name: 'ViewRecipeForm',
  props: {
    title: {
      type: String,
      default: 'Recipe',
    },
    bodyText: {
      type: String,
      default: 'This shouldnt show',
    },
    recipe: {
      type: Object,
      default: () => ({
          id: '0',
        }),
    },
    ingredient: {
      type: Object,
      default: () => ({
        //{{ ingredient.name }} ({{ ingredient.quantity }} {{ ingredient.minQuantity }} {{ ingredient.unit }})
        id: '0',
        recipeId: '',
        inventoryId: '',
        name: '',
        quantity: 0,
        minQuantity: 0,
        unit: '',
      }),
    },
    cookstep: {
      type: Object,
      default: () => ({
        //{{ ingredient.name }} ({{ ingredient.quantity }} {{ ingredient.minQuantity }} {{ ingredient.unit }})
        id: '0',
        description: '',
      }),
    },
  },
  data() {
    return {
      id: '0',
      ingredients: [], // New data property for ingredients
      cooksteps: [],
    };
  },
  created() {
    this.populateForm();
    this.getIngredients();
    this.getCooksteps();
  },
  watch: {
    recipe: {
      immediate: true,
      handler() {
        this.populateForm();
        this.getIngredients();
        this.getCooksteps();
      }
    }
  },
  methods: {
    populateForm() {
      this.id = this.recipe.id;
    },
    async getIngredients() {
      const headers = {
          'Content-Type': 'application/json', // Specify content type
          'Authorization': `${sessionStorage.getItem('SessionId')}`, // Add an authorization token
      };
      var input = {
        recipeId: this.id,
      }
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
        const response = await axios.get('https://bakery.permavite.com/api/ingredients/recipeid/' + this.id, { headers });
        this.ingredients = response.data;
      } catch (e) {
        Swal.fire({
          title: "Error!",
          text: e,
          icon: "error"
        });
      };
    },
    async getCooksteps() {
      const headers = {
          'Content-Type': 'application/json', // Specify content type
          'Authorization': `${sessionStorage.getItem('SessionId')}`, // Add an authorization token
      };
      var input = {
        recipeId: this.id,
      }
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
        const response = await axios.get('https://bakery.permavite.com/api/cookstep/recipeid/' + this.id, { headers });
        this.cooksteps = response.data;
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
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
            <form @submit.prevent="viewRecipe">
              <div class="ingredients"> 
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
          name: 'NULL',
          description: "NULL",
          rating: 0,
          prepTime: 0,
          prepUnit: "NULL",
          cookTime: 0,
          cookUnit: "NULL",
        }),
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
  created() {
    this.populateForm();
  },
  watch: {
    recipe: {
      immediate: true,
      handler() {
        this.populateForm();
      }
    }
  },
  methods: {
    populateForm() {
      this.id = this.recipe.id;
      this.name = this.recipe.name;
      this.description = this.recipe.description;
      this.rating = this.recipe.rating;
      this.prepTime = this.recipe.prepTime;
      this.prepUnit = this.recipe.prepUnit;
      this.cookTime = this.recipe.cookTime;
      this.cookUnit = this.recipe.cookUnit;
    },
    async viewRecipe() {
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
        const response = await axios.put('https://bakery.permavite.com/api/recipes/', input, { headers });


        this.$emit('close-modal');
        this.name = '';
        this.description = '';
        this.rating = 0;
        this.prepTime = 0;
        this.prepUnit = '';
        this.cookTime = 0;
        this.cookUnit = '';
        Swal.fire({
          title: "Recipe Changed!",
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
<template>

  <div>

    <!-- Modal -->
    <div class="modal fade" id="editIngredientForm" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title" id="modalLabelTitle">{{ title }} {{ id }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <form @submit.prevent="editIngredient">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="name" required>
              </div>
              <div class="mb-3">
                <label for="quantity" class="form-label">Quantity</label>
                <input type="number" step="0.01" class="form-control" id="quantity" v-model="quantity" required>
              </div>
              <div class="mb-3">
                <label for="purchaseQuantity" class="form-label">Purchase Quantity</label>
                <input type="number" step="0.01" class="form-control" id="purchaseQuantity" v-model="purchaseQuantity" required>
              </div>
              <div class="mb-3">
                <label for="costPerPurchaseUnit" class="form-label">Cost Per Purchase Unit</label>
                <input type="number" step="0.01" class="form-control" id="costPerPurchaseUnit" v-model="costPerPurchaseUnit" required>
              </div>
              <div class="mb-3">
                <label for="unit" class="form-label">Unit</label>
                <input type="text" class="form-control" id="unit" v-model="unit" required>
              </div>
              <div class="mb-3">
                <label for="notes" class="form-label">Notes</label>
                <input type="text" class="form-control" id="notes" v-model="notes" required>
              </div>
              <button id="submitIngredient" type="submit" class="btn btn-primary w-100" data-bs-dismiss="">Edit</button>
            </form>
          </div>
          
          <div class="modal-footer">
            <button id="closeEditIngredientForm" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
  name: 'EditIngredientForm',
  props: {
    title: {
      type: String,
      default: 'Ingredient',
    },
    bodyText: {
      type: String,
      default: 'This shouldnt show',
    },
    ingredient: {
      type: Object,
      default: () => ({
          id: '0',
          name: 'NULL',
          quantity: 0,
          purchaseQuantity: 0,
          costPerPurchaseUnit: 0,
          unit: 'NULL',
          notes: 'NULL'
        }),
    }
  },
  data() {
    return {
      id: '',
      name: '',
      quantity: 0,
      purchaseQuantity: 0,
      costPerPurchaseUnit: 0,
      unit: '',
      notes: ''
    };
  },
  created() {
    this.populateForm();
  },
  watch: {
    ingredient: {
      immediate: true,
      handler() {
        this.populateForm();
      }
    }
  },
  methods: {
    populateForm() {
      this.id = this.ingredient.id;
      this.name = this.ingredient.name;
      this.quantity = this.ingredient.quantity;
      this.purchaseQuantity = this.ingredient.purchaseQuantity;
      this.costPerPurchaseUnit = this.ingredient.costPerPurchaseUnit;
      this.unit = this.ingredient.unit;
      this.notes = this.ingredient.notes;
    },
    async editIngredient() {
      var input = {
        id: this.id,
        name: this.name,
        quantity: this.quantity,
        purchaseQuantity: this.purchaseQuantity,
        costPerPurchaseUnit: this.costPerPurchaseUnit,
        unit: this.unit,
        notes: this.notes
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
        const response = await axios.put('https://bakery.permavite.com/api/inventory/', input, { headers });


        this.$emit('close-modal');
        this.name = '';
        this.quantity = 0;
        this.purchaseQuantity = 0;
        this.costPerPurchaseUnit = 0;
        this.unit = '';
        this.notes = '';
        Swal.fire({
          title: "Ingredient Changed!",
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
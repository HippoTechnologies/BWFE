<!-- src/components/AdminRequest.vue -->
<template>
  <div class="admin-request">
    <h2>Request Admin Rights</h2>
    <form @submit.prevent="submitRequest">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <button type="submit">Request Admin Rights</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    submitRequest() {
      // Submit the request to the admin for approval
      console.log(`Admin rights requested for ${this.email}`);
    },
  },
};
</script>

<style scoped>
.admin-request {
  padding: 20px;
}
</style>

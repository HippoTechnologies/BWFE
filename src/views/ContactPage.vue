<template>
  <div class="container mt-5 d-flex justify-content-center">
    <div class="contact-form p-4 rounded">
      <h2 class="text-center">Have a Question?</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" v-model="name" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea class="form-control" id="message" rows="3" v-model="message" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission
      console.log('Form submitted:', this.name, this.email, this.message);
    },
  },
};
</script>

<style>
.contact-form {
  max-width: 500px;
  width: 100%;
  background-color: #FFFDEF;
  color: #290102;
}
.contact-form button[type="submit"] {
  background-color: #290102; 
  border: none;
}

.contact-form button[type="submit"]:hover {
  background-color: #FFFDEF; /* Change to your desired hover background color */
  color: #290102; /* Change to your desired hover text color */
}
</style>
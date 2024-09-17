<!-- src/components/EmployeePage.vue -->
<template>
  <div class="employee-page">
    <header>
     
      <h1>Hello, {{ employeeName }}</h1>
     
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employeeName: 'Employee Name', // Can be fetched dynamically
      logo: '/path/to/logo.png',
    };
  },
};
</script>

<style scoped>
.employee-page {
  /* Add styling here */
  padding: 20px;
}
.logo {
  width: 100px;
}
nav ul {
  display: flex;
  gap: 1rem;
}
</style>

<template>
  <div id="app">
    <NavBar v-if="!isEmployee" />
    <EmployeeNavBar v-if="isEmployee" />
    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue';
import { state } from './store/store';
import NavBar from './components/NavBar.vue';
import EmployeeNavBar from './components/EmployeeNavBar.vue';

export default {
  components: {
    NavBar,
    EmployeeNavBar
  },
  setup() {
    const isEmployee = computed(() => state.isEmployee);

    return {
      isEmployee
    };
  }
};
</script>

<style>
html, body, #app {
  background-color: #A7292F;
  margin: 0;
  padding: 0;
  height: 100%;
  color: #CDC69A;
}
</style>
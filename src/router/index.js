import { createRouter, createWebHistory } from 'vue-router';
import EmployeePage from '@/components/EmployeePage.vue';
import Schedule from '@/components/Schedule.vue';
import Inventory from '@/components/Inventory.vue';
import Recipe from '@/components/Recipe.vue';
import Ingredients from '@/components/Ingredients.vue'; // New component
import Sales from '@/components/Sales.vue'; // New component
import ProfileSettings from '@/components/ProfileSettings.vue';
import AdminRequest from '@/components/AdminRequest.vue';

const routes = [
  { path: '/', component: EmployeePage },
  { path: '/home', component: EmployeePage },
  { path: '/schedule', component: Schedule },
  { path: '/inventory', component: Inventory },
  { path: '/ingredients', component: Ingredients }, // New route
  { path: '/recipe', component: Recipe },
  { path: '/sales', component: Sales }, // New route
  { path: '/profile', component: ProfileSettings },
  { path: '/admin-request', component: AdminRequest },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

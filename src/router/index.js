import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ProductsPage from '@/views/ProductsPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import Login from '@/views/LoginPage.vue';
import EmployeePage from '@/views/EmployeePage.vue';
import Schedule from '@/views/Schedule.vue';
import Settings from '@/views/Settings.vue';
import Sales from '@/views/Sales.vue';
import Ingredients from '@/views/Ingredients.vue';
import Recipe from '@/views/Recipe.vue';
import ProfileSettings from '@/components/ProfileSettings.vue';
import AdminRequest from '@/components/AdminRequest.vue';


const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/products', component: ProductsPage, name: 'Products' },
  { path: '/contact', component: ContactPage, name: 'Contact' },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/employee-page', component: EmployeePage, name: 'Employee' },
  { path: '/schedule', component: Schedule, name: 'Schedule' },
  { path: '/settings', component: Settings, name: 'Settings' },
  {path: '/sales', component: Sales, name: 'Sales'},
  {path: '/ingredients', component: Ingredients, name: 'Ingredients'},
  {path: '/recipe', component: Recipe, name: 'Recipe'},
  {path: '/profile', component: ProfileSettings, name: 'Profile'},
  {path: '/admin-request', component: AdminRequest, name: 'AdminRequest'},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;




/*const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login},
  { path: '/products', component: ProductsPage },
  { path: '/contact', component: ContactPage },
  { path: '/employee-page', component: EmployeePage },
  { path: '/schedule', component: Schedule },
  { path: '/inventory', component: Inventory },
  { path: '/ingredients', component: Ingredients }, // New route
  { path: '/recipe', component: Recipe },
  { path: '/sales', component: Sales }, // New route
  { path: '/profile', component: ProfileSettings },
  { path: '/admin-request', component: AdminRequest },
  { path: '/Register', component: Register},
  { path: '/ChangePassword', component: ChangePassword},
  { path: '/settings', component: settings},
  { path: '/adminpage', component: AdminPage},
];

*/
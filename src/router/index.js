import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ProductsPage from '@/views/ProductsPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import Login from '@/views/LoginPage.vue';
import EmployeePage from '@/views/EmployeePage.vue';
import Schedule from '@/views/Schedule.vue';


const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/products', component: ProductsPage, name: 'Products' },
  { path: '/contact', component: ContactPage, name: 'Contact' },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/employee-page', component: EmployeePage, name: 'Employee' },
  { path: '/schedule', component: Schedule }
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
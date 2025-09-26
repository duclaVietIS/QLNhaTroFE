import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../modules/HomePage.vue';
import AboutPage from '../modules/AboutPage.vue';
import ContactPage from '../modules/ContactPage.vue';
import NotFoundPage from '../modules/NotFoundPage.vue';
import LoginPage from '../modules/auth/view/Login.vue';
import RegisterPage from '../modules/auth/view/Register.vue';
import ForgotPasswordPage from '../modules/auth/view/ForgotPassword.vue';   

// define routes
const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/about', name: 'About', component: AboutPage },
    { path: '/contact', name: 'Contact', component: ContactPage },
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/signup', name: 'Signup', component: RegisterPage },
    { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPasswordPage },
    { path: '/:catchAll(.*)', name: 'NotFound', component: NotFoundPage }
]

// create router instance
const router = createRouter({
    history: createWebHistory(),
    routes
});

// export the router
export default router;

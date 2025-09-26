import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../modules/HomePage.vue';
import AboutPage from '../modules/AboutPage.vue';
import ContactPage from '../modules/ContactPage.vue';
import NotFoundPage from '../modules/NotFoundPage.vue';

// define routes
const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/about', name: 'About', component: AboutPage },
    { path: '/contact', name: 'Contact', component: ContactPage },
    { path: '/:catchAll(.*)', name: 'NotFound', component: NotFoundPage }
]

// create router instance
const router = createRouter({
    history: createWebHistory(),
    routes
});

// export the router
export default router;

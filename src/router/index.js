import { createRouter, createWebHistory } from 'vue-router'
// Components
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Product from '../views/ProductView.vue'

const routes = [
    {
        path: "/",
        name: 'Home',
        component: Home,
    },
    {
        path: "/about",
        name: 'About',
        component: About,
    },
    {
        path: "/product",
        name: "Product",
        component: Product
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/saga-blue/theme.css';


const pinia = createPinia()

createApp(App).use(PrimeVue).use(pinia).use(router).mount('#app')

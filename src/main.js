import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Base styles
import './index.css'
import './assets/styles/global.css'

createApp(App).use(store).use(router).use(router).mount('#app')

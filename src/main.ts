import { createApp } from 'vue'

import App from './App.vue'
import './assets/main.css'

import { VueQueryPlugin } from '@tanstack/vue-query'


const app = createApp(App)
app.use(VueQueryPlugin) 
app.mount('#app')
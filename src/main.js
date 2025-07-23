import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

const app = createApp(App)
app.use(router)
app.mount('#app')
AOS.init({
    once: false,
    mirror: true,
})

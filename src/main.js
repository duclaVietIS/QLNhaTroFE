import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index.js'

// Import FontAwesome CSS
import '@fortawesome/fontawesome-free/css/all.css'

// Import Animate.css
import 'animate.css'

// create and mount the app
createApp(App)
        .use(Router)
        .mount('#app')

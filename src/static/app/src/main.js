import '../../css/dashboard.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css/animate.compat.css'
import '@vuepic/vue-datepicker/dist/main.css'

import {createApp, markRaw} from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from './locales/vue-i18n.global.js';
import App from './App.vue'
import router from './router'
import messages from './locales/locales.js'



const app = createApp(App)
app.use(router)
const pinia = createPinia();
const i18n = createI18n({
  fallbackLocale: 'en',
  messages,
});

pinia.use(({ store }) => {
	store.$router = markRaw(router)
})

app.use(pinia, i18n)

app.mount('#app')

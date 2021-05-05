import { createApp } from 'vue';
import Toast, { POSITION } from 'vue-toastification';

import App from './App.vue';
import router from './router';
import VueCookies from 'vue-cookies'
createApp(App)
  .use(router)
  .use(Toast, {
    position: POSITION.BOTTOM_RIGHT,
    transition: 'Vue-Toastification__fade'
  })
  .mount('#app');
App.use(VueCookies)

import './assets/styles/app.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import { vueI18n } from './plugins/vue-i18n';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(vueI18n);
app.use(router);

app.mount('#app');

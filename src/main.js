// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // path to vuetify export

const app = createApp(App);
app.use(vuetify);
app.mount('#app');

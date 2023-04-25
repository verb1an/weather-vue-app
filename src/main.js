import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App);

import components from '@/components/';

components.forEach(comp => {
    app.component(comp.name, comp);
});

app.use(store).use(router).mount('#app')

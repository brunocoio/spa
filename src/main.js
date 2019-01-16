import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import {routes} from './routes';
import VueTour from 'vue-tour'
 
Vue.use(VueRouter);

require('vue-tour/dist/vue-tour.css')

Vue.use(VueTour)
 
const router = new VueRouter({
    routes,
    mode: 'history'
});
 
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
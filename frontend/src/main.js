import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);
Vue.use(require('vue-moment'))
Vue.config.productionTip = false;

import CreateTenent from './views/CreateTenent.vue';
import Tenents from './views/Tenents.vue';
import UpdateTenent from './views/UpdateTenent.vue';

const routes = [{
        name: 'create',
        path: '/create',
        component: CreateTenent
    },
    {
        name: 'tenents',
        path: '/',
        component: Tenents
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: UpdateTenent
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue(Vue.util.extend({
    router
}, App)).$mount('#app')
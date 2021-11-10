/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('admin-lte'); 

//Vue
import { createApp } from 'vue'
import App from './App.vue'
//Route
import router from './router'
//Store
import store from './store'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')

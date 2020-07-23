import Vue from "vue";

import router from './router'

import home from './views/Home'
const app = new Vue({
    el: '#app',
    router,
    components:{
        home,
    }
});
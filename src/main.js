import Vue from 'vue';
import VueRouter from 'vue-router';
import routers from './route';

Vue.config.debug = true;

//  实例化模块
Vue.use(VueRouter);

//  创建主模板
var app = Vue.extend(require('./app.vue'));

//  实例化Router
var router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

routers(router);

router.start(app, '#app');

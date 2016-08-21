import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './components/app';

Vue.config.debug = true;

Vue.use(VueRouter);

new Vue(app);

var App = Vue.extend({});

var a = Vue.extend({
    template: '<p>A Content</p>'
})

var b = Vue.extend({
    template: '<p>B Content</p>'
})

var router = new VueRouter();

router.map({
    '/a': {
        component: a
    },
    '/b': {
        component: b
    }
})

router.start(App, '#app');

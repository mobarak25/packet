import Vue from 'vue';
import VueRouter from 'vue-router';

import homeContent from './views/HomeContent';
import notFound from './views/NotFound';

import foo from './views/Foo';
import bar from './views/Bar';

Vue.use(VueRouter);


export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: homeContent
        },
        {
            path: '/foo',
            name: 'foo',
            component: foo
        },
        {
            path: '/bar',
            name: 'bar',
            component: bar
        },
        {
            path: '/*',
            component: notFound
        }
    ],
    mode: "history",
    base: process.env.BASE_URL,
})
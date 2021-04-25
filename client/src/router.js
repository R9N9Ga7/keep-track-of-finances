import Vue from 'vue';
import VueRouter from 'vue-router';

import authentication from './app/authentication/auth.route';

Vue.use(VueRouter);

const routes = [
  authentication,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

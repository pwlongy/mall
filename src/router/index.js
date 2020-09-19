/*
 * @Author: your name
 * @Date: 2020-08-19 17:54:27
 * @LastEditTime: 2020-08-25 00:54:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuemall\src\router\index.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopcart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

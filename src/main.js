import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// // 导入Swiper 相关组件
// import 'swiper/swiper-bundle.css'
// import 'swiper/css/swiper.css'

// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

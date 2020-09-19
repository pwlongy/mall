<!--
 * @Author: your name
 * @Date: 2020-08-24 22:22:28
 * @LastEditTime: 2020-08-24 22:23:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vuemall\src\views\home\Home.vue
-->
<template>
  <div>
    <!-- 导航栏 -->
    <navbar class="home-nav">
      <div slot="centerBar">购物街</div>
    </navbar>
    <!-- 轮播图 -->
    <HomeSwiper :banners='result.banners'></HomeSwiper>
    <Homerecommends :recommends='result.recommends'></Homerecommends>
  </div>
</template>

<script>
import axios from 'axios'
import navbar from 'components/common/navbar/NavBar.vue'
// 导入轮播图组件
import HomeSwiper from './childComps/HomeSwiper.vue'
import Homerecommends from './childComps/Homerecommends.vue'

import {getHomeMultidata} from 'Network/home.js'

export default {
  data() {
    return{
      // 轮播图数据
      result: {
        banners: [],
        recommends: []
      }
    }
  },
  components: {
    navbar,
    HomeSwiper,
    Homerecommends
  },

  created(){
    // 请求获取轮播图数据
    getHomeMultidata().then(res => {
      this.result.banners = res.data.data.banner.list
      this.result.recommends = res.data.data.recommend.list
    })
  }
}

// axios({
//   url:'http://152.136.185.210:8000/api/z8/home/multidata'
// }).then(res=>{
//   console.log(res)
// })

// const instance = axios.create({
//   baseURL: 'http://152.136.185.210:8000/api/z8',
//   timeout: 5000,
// })

// instance({
//   url: 'home/multidata'
// }).then(res=>{
//   console.log(res)
// })



</script>

<style scoped>
  .home-nav{
    background: lightpink;
    color: white;
  }
</style>

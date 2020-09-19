<template>
  <div id="app">
    <router-view></router-view>
    <tabBar>
      <tabBarItem path = '/home'>
        <img slot="item-icon" src="~assets/images/tabbar/home.svg">
        <img slot="item-icon-action" src='~assets/images/tabbar/home_active.svg'>
        <div slot="item-text">首页</div>
      </tabBarItem>
      <tabBarItem path = '/category'>
        <img slot="item-icon" src="~assets/images/tabbar/category.svg">
        <img slot="item-icon-action" src='~assets/images/tabbar/category_active.svg'>
        <div slot="item-text">分类</div>
      </tabBarItem>
      <tabBarItem path = '/shopcart'>
        <img slot="item-icon" src="~assets/images/tabbar/shopcart.svg">
        <img slot="item-icon-action" src='~assets/images/tabbar/shopcart_active.svg'>
        <div slot="item-text">购物车</div>
      </tabBarItem>
      <tabBarItem path = '/profile'>
        <img slot="item-icon" src="~assets/images/tabbar/profile.svg">
        <img slot="item-icon-action" src='~assets/images/tabbar/profile_active.svg'>
        <div slot="item-text">我的</div>
      </tabBarItem>
    </tabBar>
  </div>
</template>

<script>
import tabBar from 'components/common/tabbar/TabBar.vue'
import tabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
  components:{
    tabBar,
    tabBarItem
  }
}
</script>

<style scoped>

</style>

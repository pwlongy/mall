<template>
  <div>
      <swiper>
        <swiperItem v-for="item in banners" :key="item.title">
          <a :href="item.link">
            <img :src="item.image">
          </a>
        </swiperItem>
      </swiper>
  </div>
</template>

<script>
import {swiper, swiperItem} from 'components/common/Swiper'

export default {
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components:{
    swiper,
    swiperItem
  }
}
</script>

<template>
  <div class="Navbar">
    <div class='left'> <slot name="leftBar"></slot></div>
    <div class='center'><slot name='centerBar'></slot></div>
    <div class='right'><slot name='rightBar'></slot></div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    }
  }
 }
</script>

<style scoped>
  .Navbar{
    width: 100%;
    height: 44px;
    display: flex;

    box-shadow: 0 1 1 rgba(77, 75, 75, 0.5);
  }
  .left .right{
    flex: 1;
  }
  .center{
    flex: 4;
    text-align: center;
    line-height: 44px;
  }

</style>

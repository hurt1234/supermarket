<template>
   <div id="cart">
      <!-- slot属性这里不能放nav-bar 标签中 -->
      <nav-bar class="cart-bar" ><div slot="center" >购物车({{cartLength}})</div></nav-bar>
      <!-- 商品列表 -->
      <cart-list />
      <!-- 底部汇总 -->
      <bottom-bar/>
     
      
    
   </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartList from './childComponents/CartList'
import NavBar from 'components/common/navbar/NavBar'
import BottomBar from './childComponents/BottomBar'
export default {
   data () {
      return {

      };
   },

   components: {
      NavBar,
      CartList,
      BottomBar
   },

  computed: {
     ...mapGetters(['cartLength'])
   },

   methods: {}
}
</script>
<style lang='css' scoped>
#cart {
    /*position: relative;*/
    height: 100vh;
  }

  .cart-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
 

  /* .cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
  } */

</style>

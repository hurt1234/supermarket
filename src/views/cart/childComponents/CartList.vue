<template>
   <div id="cart-list">
      <scroll class="content" ref="scroll">
      
        <cart-item v-for="(item,index) in cartList" :key="index" :item-info="item"/>
      

     </scroll>
   
   </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartItem from './CartItem'
import Scroll from 'components/common/scroll/Scroll'
export default {
   data () {
      return {

      };
   },
   components:{
     CartItem,
     Scroll

   },
   computed:{
     ...mapGetters(['cartList'])

   },

   methods: {

   },
   activated(){
     this.$refs.scroll.refresh()

}
}

</script>
<style lang='css' scoped>
#cart-list {
  height:calc(100% - 44px - 49px - 40px)
}
.content {
  height: 100%;
  overflow: hidden;
}


</style>
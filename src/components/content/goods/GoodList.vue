<template>
   <div class="goods-list">
     <good-list-item  v-for="(item,index) in goods" :key="index" :goodsitem="item"/>
     
   </div>
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
   data () {
      return {

      };
   },
   props:{
      goods:{
         type:Array,
         default(){
            return []
         }
      }
   },

   components: {
      GoodListItem
   },

   computed: {},

   methods: {}
}
</script>
<style lang='css' scoped>
.goods-list{
  padding: 2px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; 
} 


</style>
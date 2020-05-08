<template>
   <div id="bottom-bar">
     
     <div class="all">
       <check-button :value='isSelctAll' @click.native="checkCLick"/>
       <span>全选</span>
     </div>
      <div class="all-price">
       <span>合计({{showprice}})</span>
     </div> 
     <div class="sum" @click="goSum">
       <span>去结算({{showsum}})</span>
      
      

     </div>

   </div>
</template>

<script>
import CheckButton from './CheckButton'
import {mapGetters} from 'vuex'
export default {
   data () {
      return {

      };
   },
   computed:{
     ...mapGetters(['cartList']),
     showprice(){
       return '￥'+this.cartList.filter(item=>{
         return item.checked
       }).reduce((pre,item)=>{
         return pre + parseInt(item.newPrice.slice(1,6))*item.count

       },0)
      

     },
      showsum(){
        return this.cartList.filter(item=>{
          return item.checked
        }).length

       },
       isSelctAll(){
         if(this.cartList.length===0) return false;
        /*  return !(this.cartList.filter(item=>!item.checked).length) */
        return !(this.cartList.find(item=>!item.checked))
       }

   },
   components:{
     CheckButton

   },

   methods: {
     checkCLick(){
       if(this.isSelctAll){
         this.cartList.forEach(item=>item.checked=false)
       }else{
         this.cartList.forEach(item=>item.checked=true)
       }

     },
     goSum(){
       if(!this.isSelctAll){
         this.$toast.show('请选择商品')
       }
     }
   }
}
</script>
<style lang='css' scoped>
#bottom-bar {
  height: 40px;
  background-color: #ccc;
  display: flex;
  justify-content: space-around;
 
}
.all {
  display: flex;
  align-items: center;
}
.all span {
  margin-left: 10px;
}
.all-price {
  display: flex;
  align-items: center;
}
.sum {
  display: flex;
  align-items: center;
  background-color: pink;
}

</style>
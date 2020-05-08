<template>
   <div>
     <nav-bar>
       <div slot="left" class="back" @click="backClick" >
         <img src="~assets/img/common/back.svg" alt="">
       </div>
       <div slot="center" class="center" >
         <div v-for="(item,index) in titles" :key="index" @click="itemClick(index)" :class="{active:currentIndex==index}">{{item}}</div>

       </div>
     </nav-bar>
   </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
   data () {
      return {
         titles: ['商品', '参数', '评论', '推荐'],
         currentIndex:0

      };
   },

   components: {
     NavBar
   },
   methods: {
     itemClick(index){
       this.currentIndex=index;
       this.$emit('itemClick',index)
       
       

     },
     backClick(){
       this.$router.back();
     }
   }
}
</script>
<style lang='css' scoped>
.center {
  display: flex;
  justify-content: space-around;
}
.back img {
  margin-top:15px;
  width: 30%;
}
.active {
  color:hotpink
}
</style>
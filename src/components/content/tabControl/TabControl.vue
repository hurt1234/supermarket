<template>
   <div class="tab-control">
     <div class="tab-control-item" v-for='(item,index) in titles' :key="item" :class="{active:index==currentIndex}" @click=tabClick(index)>
       <span>{{item}}</span>

     </div>

   </div>
</template>

<script>
export default {
   data () {
      return {
        currentIndex:0

      };
   },
   props:{
     titles:{
       type:Array,
       default(){
         return []
       }
     }
   },

   components: {},

   computed: {},

   methods: {
     tabClick(index){
       this.currentIndex=index;
       this.$emit('tabClick',index)
     }
   }
}
</script>
<style lang='css' scoped>
.tab-control {
  display: flex;
  justify-content: space-around;
  height: 44px;
  line-height: 44px;
  text-align: center;
  z-index: 9;
  background-color: #fff;
  margin-bottom: 10px;
 
  
}
.tab-control-item {
  flex: 1;
  padding: 2px;
  

}
.tab-control-item span {
  padding-bottom: 5px;

  
}
.active span {
  border-bottom: 2px solid var(--color-tint);
}
.active {
  color: var(--color-tint);
}

</style>
<template>
   <div id="toast" v-show="isShow">
     {{msg}}
   </div>
</template>

<script>
export default {
   data () {
      return {
        msg:'',
        isShow:false

      };
   },

   methods: {
     show(msg,time=1000){
       this.msg=msg
       this.isShow=true
       setTimeout(()=>{
         this.isShow=false
         this.msg=''

       },time)
     }
   }
}
</script>
<style lang='css' scoped>
#toast {
  z-index: 999;
  background-color: rgba(0,0,0,.6);
  color: #fff;
  position: fixed;
  left: 50%;
  top:50%;
  padding: 8px 10px;
  border-radius: 10px;
  transform: translate(-50%,-50%);
}

</style>
<template>
   <div  ref="wrapper">
     <div class="content"><slot></slot></div>
   </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
   data () {
      return {
        scroll:null

      };
   },
   props:{
     probeType:{
       type:Number,
       default:1
     },
     pullUpLoad:{
       type:Boolean,
       default:false
     }


   },
   mounted(){
  

     this.scroll=new BScroll(this.$refs.wrapper,{
         probeType:this.probeType,
         click:true,
         pullUpLoad:this.pullUpLoad

     })
     this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
       
     })
     this.scroll.on('pullingUp',()=>{
       this.$emit('pullingUp')
     })
     this.scroll.refresh()
 
   },
    methods: {
     backTop(x,y,time=500){
       this.scroll.scrollTo(x,y,time)
     },
      refresh() {
        this.scroll && this.scroll.refresh()
        //console.log(11);
        
      },
   }

  
}
</script>
<style lang='css' scoped>

</style>
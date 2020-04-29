<template>
   <div>
   <ic-slider :autoplay="3000">
      <ic-slider-item v-for="item in banners" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" @load="imageLoad" >
       </a>
      </ic-slider-item>
    </ic-slider>
   </div>
</template>

<script>
import { IcSlider,IcSliderItem } from "components/common/swiperCopy/index";
export default {
   data () {
      return {
        isLoad:false

      };
   },
   props:{
     banners:{
       type:Array,
       default(){
         return []
       }
     }

   },

   components: {
     IcSlider,
     IcSliderItem
  },

  
   methods: {
    
     imageLoad(){
        if(!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad=true
     }
       
     }
   }
}
</script>
<style lang='css' scoped>

</style>
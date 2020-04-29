<template>
  <div class="swiper">
     <ic-slider :autoplay="3000">
     <ic-slider-item v-for="item in topImages" :key="item">
       <img :src="item" alt="">
     </ic-slider-item>
   </ic-slider>
  </div>
</template>

<script>
import { IcSlider,IcSliderItem } from "components/common/swiperCopy/index";
export default {
   data () {
      return {

      };
   },
   props:{
     topImages:{
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

   computed: {},

   methods: {}
}
</script>
<style lang='css' scoped>
.swiper{
  height: 300px;
  overflow: hidden;
  box-sizing:content-box;
}

</style>
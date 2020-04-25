<template>
   <div>
   <ic-slider :autoplay="3000">
      <ic-slider-item v-for="item in banners" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" >
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

   computed: {},

   methods: {}
}
</script>
<style lang='css' scoped>

</style>
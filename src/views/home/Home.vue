<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- <swiper-item v-for="item in banners" :key="item.link">
       <a :href="item.link">
          <img :src="item.image" >
       </a>
    </swiper-item> -->
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
import NavBar from "components/common/navbar/NavBar";
//import { Swiper, SwiperItem } from "components/common/swiper/index";
import { IcSlider,IcSliderItem } from "components/common/swiperCopy/index";
import { getHomeMultidata } from "network/home";
export default {
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
  },

  components: {
    NavBar,
    /* Swiper,
    SwiperItem */
    IcSlider,
	IcSliderItem
  },

  computed: {},

  methods: {}
};
</script>
<style lang='css' scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
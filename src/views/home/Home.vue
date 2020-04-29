<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
     <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick='tabClick' ref="tabControl2" v-show="isTabControl"  />
    <scroll class="content" ref="scroll" :probeType="3" :pullUpLoad="true" @pullingUp='loadMore'   @scroll="getPosition">
    <home-swiper :banners='banners' @swiperImageLoad='swiperImageLoad'/>
    <recommend-view :recommends='recommends' />
    <feature-view/>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick='tabClick' ref="tabControl1"  />
  <!-- 商品列表-->
  <good-list :goods="goods[currentType].list"></good-list>

    </scroll>
    <back-to @click.native="backTop" v-show="isShowBackTop" />
   
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from 'components/content/tabControl/TabControl'
import GoodList from 'components/content/goods/GoodList'
import Scroll from 'components/common/scroll/Scroll'
import BackTo from 'components/content/backTo/BackTo'

import HomeSwiper from './chlidComponents/HomeSwiper'
import RecommendView from './chlidComponents/RecommendView'
import FeatureView from './chlidComponents/FeatureView'




import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce} from 'common/utils'
export default {
  data() {
    return {
      
      banners: [],
      recommends: [],
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]}
      },
      currentType:'pop',
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabControl:false,
      saveY:0
    };
  },
  created() {
    //轮播图数据
    this.getHomeMultidata()
    //商品展示数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    
   

  },
  mounted(){
 
    const refresh=debounce(this.$refs.scroll.refresh,300)
     this.$bus.$on('loadImage',()=>{
     refresh();
    })

  },
  activated(){
    this.$refs.scroll.backTop(0,this.saveY,0);
    this.$refs.scroll.refresh()
    

  },
  deactivated(){
    this.saveY=this.$refs.scroll.scroll.y

  },
   methods: {
        //轮播图数据
    getHomeMultidata(){
      getHomeMultidata().then(res => {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
      },
     //商品展示数据
     getHomeGoods(type){
       let page=this.goods[type].page+1;
       getHomeGoods(type,page).then(res=>{
         this.goods[type].page=page;
         this.goods[type].list.push(...res.data.data.list);
         page+=1; 
           // 完成上拉加载更多
         this.$refs.scroll.scroll.finishPullUp()
          this.$refs.scroll.scroll.refresh()
         
       })
     },
     //导航吸顶
     swiperImageLoad(){
       this.tabOffsetTop= this.$refs.tabControl1.$el.offsetTop;
       //console.log(this.tabOffsetTop)

     },
     loadMore(){
       this.getHomeGoods(this.currentType)
     },
     tabClick(index){
       switch(index){
         case 0 :
         this.currentType='pop';
         break;
        case 1 :
         this.currentType='new';
         break;
         case 2 :
         this.currentType='sell';
         break;
       }
       this.$refs.tabControl1.currentType=index;
       this.$refs.tabControl2.currentType=index;
     },
     backTop(){
       this.$refs.scroll.backTop(0,0);
     },
     //监听滚动
     getPosition(position){
       this.isShowBackTop=-position.y>1000
       this.isTabControl=-position.y>this.tabOffsetTop
       
     }
       

     


   },

  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTo
  },

  computed: {},

 
};
</script>
<style lang='css' scoped>
#home  {
/*   padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  width: 100%;
  /* position: fixed;
  left: 0;
  top:0;
  
  z-index: 9; */
}
.tab-control {
 /*  position: sticky;
  top:44px; */
  text-align: center;
  margin-bottom: 10px;
  
}
.content {
  height: 429px; 
 
  overflow: hidden;
  
}

</style>
<template>
   <div id="detail">
     <nav-bar class="detail-nav"/>
     <scroll class="content" >
      <detail-swiper :topImages="topImages"/>
     <detail-info :goods="goods"/>
     <detail-shop-info :shop="shop"/>
    
     <detail-param-info :paramInfo="paramInfo" />
     <detail-comment-info :commentInfo="commentInfo" />
     <good-list :goods="recommendInfo" />

     </scroll>
     

   </div>
</template>

<script>
import NavBar from './childComponents/NavBar'
import DetailSwiper from './childComponents/DetailSwiper'
import DetailInfo from './childComponents/DetailInfo'
import DetailShopInfo from './childComponents/DetailShopInfo'
import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import Scroll from 'components/common/scroll/Scroll'
import DetailParamInfo from './childComponents/DetailParamInfo'
import DetailCommentInfo from './childComponents/DetailCommentInfo'
import GoodList from 'components/content/goods/GoodList'
export default {
   name:"Detail",
   data () {
      return {
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        paramInfo:{},
        commentInfo:{},
        recommendInfo:[]

      };
   },
   created(){
     this.iid=this.$route.params.iid;
     getDetail(this.iid).then(res=>{
         const data = res.data.result;
  
      this.topImages=data.itemInfo.topImages;
     //  console.log(this.topImages);
     // 2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shop=new Shop(data.shopInfo)
        this.paramInfo= new GoodsParam(data.itemParams.info, data.itemParams.rule);
         if (data.rate.cRate) {
            this.commentInfo = data.rate.list[0];
          };
      //获取推荐信息
      getRecommend().then(res=>{
       
        this.recommendInfo=res.data.data.list

      })
     
      
     })

    
   },

   components: {
      NavBar,
      DetailSwiper,
      DetailInfo,
      DetailShopInfo,
      Scroll,
      DetailParamInfo,
      DetailCommentInfo,
      GoodList
   },

   computed: {},

   methods: {}
}
</script>

<style lang='css' scoped>
  #detail {
    position: relative;
    z-index: 99;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px);
  }
</style>
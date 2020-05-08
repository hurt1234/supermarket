<template>
   <div id="detail">
     <nav-bar class="detail-nav" @itemClick="itemClick" ref="navBar" />
     <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3"  >
      <detail-swiper :topImages="topImages"/>
     <detail-info :goods="goods"/>
     <detail-shop-info :shop="shop"/>
    
     <detail-param-info ref="param" :paramInfo="paramInfo" />
     <detail-comment-info ref="comment" :commentInfo="commentInfo" />
     <good-list ref="commend" :goods="recommendInfo" />

     </scroll>
     <detail-bottom-bar @addToCart="addToCart" />
     <back-to @click.native="backTop" v-show="isShowBackTop" />
     

   </div>
</template>

<script>
import NavBar from './childComponents/NavBar'
import DetailSwiper from './childComponents/DetailSwiper'
import DetailInfo from './childComponents/DetailInfo'
import DetailShopInfo from './childComponents/DetailShopInfo'
import DetailBottomBar from './childComponents/DetailBottomBar'
import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import Scroll from 'components/common/scroll/Scroll'
import DetailParamInfo from './childComponents/DetailParamInfo'
import DetailCommentInfo from './childComponents/DetailCommentInfo'
import GoodList from 'components/content/goods/GoodList'
import { debounce } from 'common/utils'
import { backTopMixin }  from 'common/mixin'

export default {
   name:"Detail",
   mixins:[ backTopMixin],
   data () {
      return {
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        paramInfo:{},
        commentInfo:{},
        recommendInfo:[],
        getsaveY:null,
        saveY:[],
        currentIndex:null

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
      this.getsaveY=debounce(()=>{
        this.saveY=[]
        this.saveY.push(0);
        this.saveY.push(this.$refs.param.$el.offsetTop);
        this.saveY.push(this.$refs.comment.$el.offsetTop);
        this.saveY.push(this.$refs.commend.$el.offsetTop);
        this.saveY.push(Number.MAX_VALUE);
      },300)
      this.getsaveY()
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
      GoodList,
      DetailBottomBar
   },

  

   methods: {
     //将Actions中的方法映射到这里，可以直接this.addCart使用
     //...mapActions(['addCart']),
     itemClick(index){
     
      this.$refs.scroll.backTop(0,-this.saveY[index]+30)
      
     },
     contentScroll(position){
       const length=this.saveY.length
       let y=-position.y;
      for(let i=0;i<length-1;i++){
       /*  (this.currentIndex!=i)&&(i<length-1 &&y>this.saveY[i]&&y<this.saveY[i+1])&&(i==length-1 &&y>saveY[i]) */      
        if((this.currentIndex!=i)&&(y>=this.saveY[i]&&y<this.saveY[i+1])){     
          this.currentIndex=i;
          this.$refs.navBar.currentIndex=this.currentIndex;      
        }

   }
   this.isShowBackTop=-position.y>1000   

 },
 addToCart(){
   const obj = {}
        // 2.对象信息
        obj.iid = this.iid;
        obj.imgURL = this.topImages[0]
        obj.title = this.goods.title
        obj.desc = this.goods.desc;
        obj.newPrice = this.goods.newPrice;
        //通过.then 来回调成功函数
        this.$store.dispatch('addCart',obj).then(res=>{
         this.$toast.show(res)
          
        })
      
        

 }
   
   }
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
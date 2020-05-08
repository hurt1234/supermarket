import BackTo from 'components/content/backTo/BackTo'
export const backTopMixin ={
  
  data(){
    return {
      isShowBackTop:false,

    }
  },
  components:{
    BackTo 
  },
  methods:{
    backTop(){
      this.$refs.scroll.backTop(0,0);
    }
  }
}
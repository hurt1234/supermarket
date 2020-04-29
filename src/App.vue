<template>
  <div id="app">

   <keep-alive exclude="Detail">
   <router-view/>
   </keep-alive>
     <maintabbar/>
  
   
   
    
  </div>
</template>

<script>
import maintabbar from 'components/content/mainTabbar/MianTabBar'

export default {
  name: 'App',
  components:{
    maintabbar
  },
}
</script>

<style>
@import 'assets/css/base.css';



</style>

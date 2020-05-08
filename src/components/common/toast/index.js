import Toast from './Toast.vue'
const obj={}
obj.install=function(Vue){
  //1.创建组件的构造器
  const constructor=Vue.extend(Toast)
  //2.new 的方式，手动创建一个组件对象
  const toast =new constructor()
  //3.$mount将组件对象手动挂载在某一元素上
  toast.$mount(document.createElement('div'))
  //4.toast.$el就是对应的div
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast=toast


  
}






export default obj
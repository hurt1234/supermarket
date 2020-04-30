import axios from 'axios'
export const request=function(config){
  //实例化一个对象
  const instance=axios.create({
   // baseURL:"http://123.207.32.32:8000",
   baseURL:'http://123.207.32.32:',
    timeout:5000
  })
  //拦截器
  instance.interceptors.request.use(config=>{
    return config

  },err=>{

  })
  instance.interceptors.response.use(res=>{
    return res

  },err=>{

  })

  //返回一个人Promsie
  return instance(config)
}

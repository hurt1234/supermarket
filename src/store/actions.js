import {ADD_COUNTER, ADD_TO_CART} from './mutation-type'
export default {
  addCart(context,payload){
    //可以返回一个Promise对象
    return new Promise((resolve,reject)=>{
      let olditem=null;
      for(let item of context.state.cartList) {
        if(item.iid==payload.iid){
          olditem=item
        }
  
      }
      if(olditem){
        context.commit(ADD_COUNTER,olditem)
        resolve('数量加1')
      }else{
        context.commit(ADD_TO_CART,payload)
        resolve('添加商品')
        
      }
    })
  
  }
}
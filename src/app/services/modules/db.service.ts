import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  arr: any=[]

  constructor(private storage: Storage) { }

  async setData(value) {

    let keyVal = await this.storage.get('cart')
    if (keyVal===null){
    
      this.storage.set('cart',value);
  
    }else{

      let reduced=keyVal.concat(value).reduce((acc,cur)=>{

                for (let i=0; i<acc.length; i++){
                  if(acc[i].productId===cur.productId){
                    acc[i].amount++;
                    return acc
                  }
                }
                return acc.concat(cur);                
      },[])

      this.storage.set('cart',reduced)
    }
  }

  async getData(key) {
    const keyVal = await this.storage.get(key);
    return keyVal
  }


  async closeCart(cart){
  
    let newOrder={
      id:1,
      cart,
    }
     this.storage.remove("cart")
    let storedOrders= await this.storage.get('orders');
    if (storedOrders===null){
      this.storage.set('orders',[newOrder]);
      return 'success';
    }else{
      let id = storedOrders[storedOrders.length-1].id
      id++; 
      newOrder.id=id;
      storedOrders.push(newOrder);
      this.storage.set('orders',storedOrders)
      return 'success';
  }

  }




}

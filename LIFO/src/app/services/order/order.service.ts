import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api/api.service';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _orders = new BehaviorSubject<any>(null);

  get orders(){
    return this._orders.asObservable();
  }
  constructor(private api: ApiService, private storage: StorageService) { }

  getOrders() {
    try{
      const orders = this.api.orders;
      // console.log(orders);
      this._orders.next(orders);
    } catch(e) {
      throw(e);
    }
  }

  async placeOrder(param) {
    try{
      param.orders = JSON.parse(param.orders);
      param.id = '62a57ef83a259afeb8419jhj';
      console.log()
      // console.log('order:',param);
      let user:any = await this.storage.getStorage('user');
      user = JSON.parse(user.value);
      // console.log('placed:',user);
      let orderList = [];
      if(user.orders.length>0)
        orderList = [...user.orders];
      orderList.push(param);
      user.orders=orderList;
      this._orders.next(param);
      this.storage.setStorage('user',JSON.stringify(user));
    } catch(e) {
      throw(e);
    }
  }

}

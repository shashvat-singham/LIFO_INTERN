import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { BehaviorSubject } from 'rxjs';
import { GlobalService } from '../global/global.service';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  model: any = {};
  overHeads = 10;
  private _cart = new BehaviorSubject<any>(null);

  get cart(){
    return this._cart.asObservable();
  }

  constructor(
    private storage: StorageService,
    private global: GlobalService
  ) { }

  getCart(){
    return this.storage.getStorage('cart');
  }

  async getCartData(){
    let data: any = await this.getCart();
    // console.log('model: ', data);
    if(data?.value){
      this.model = await JSON.parse(data.value);
      // console.log(this.model);
      await this.calculate();
      this._cart.next(this.model);
    }
  }

  async quantityPlus(index){
    try{
      if(this.model.items[index].quantity == undefined || this.model.items[index].quantity === 0){
        this.model.items[index].quantity = 1;
      } else {
        this.model.items[index].quantity += 1;
      }
      await this.calculate();
      this._cart.next(this.model);
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  async quantityMinus(index){
    try{
      // console.log(this.items[index]);
      if(this.model.items[index].quantity !== 0){
        this.model.items[index].quantity -= 1;
      } else {
        this.model.items[index].quantity = 0;
      }
      await this.calculate();
      this._cart.next(this.model);
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  async calculate(){
    let item = this.model.items.filter(x => x.quantity > 0);
    this.model.items = item;
    this.model.totalPrice = 0;
    this.model.totalItem = 0;
    this.model.overHeads = 0;
    this.model. grandTotal = 0;

    item.forEach(element => {
      this.model.totalItem += element.quantity;
      this.model.totalPrice += (parseFloat(element.quantity)*parseFloat(element.price));
    });
    this.model.overHeads = this.overHeads;
    this.model.totalPrice = parseFloat(this.model.totalPrice).toFixed(2);
    this.model.grandTotal = (parseFloat(this.model.totalPrice)+parseFloat(this.model.overHeads)).toFixed(2);
    if(this.model.totalItem == 0)
    {
      this.model.totalItem = 0;
      this.model.totalPrice = 0;
      this.model.grandTotal = 0;
      await this.clearCart(); 
      // this.model = null;
      // await this.storage.removeStorage('cart');
      // this._cart.next(this.model);
    }
    console.log('cart:', this.model);
  }

  async clearCart(){
    await this.global.showLoader();
    this.model = null;
    await this.storage.removeStorage('cart');
    this._cart.next(null);
    await this.global.hideLoader();
  }

  saveCart(){
    this.storage.setStorage('cart', JSON.stringify(this.model));
    // this._cart.next(this.model);
  }
}

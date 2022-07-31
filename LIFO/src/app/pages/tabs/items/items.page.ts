import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { ApiService } from 'src/app/services/api/api.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  id: any;
  data: any = {};
  items: any = [];
  cartData: any = {};
  storedData: any = {};
  param: any;
  isLoading: boolean;
  model = {
    icon: 'fast-food-outline',
    title: 'No Menu Available'
  }
  allItems: any[] = [];
  categories: any[] = [];
  veg: boolean = false;

  restaurants: any[] = [];

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
  ) { }

  ngOnInit() {
    this.getRest();
    this.route.paramMap.subscribe(paramMap => {
      console.log('data: ', paramMap);
      if(!paramMap.has('restaurantId')){
        this.navCtrl.back();
        return;
      }
      this.id = paramMap.get('restaurantId');
      console.log('new',this.id);
      this.getDish();
      this.getItems();
    })
  }

  getRest(){
    this.api.getAllRestaurants().subscribe((res:any) => {
      this.restaurants = res;
      console.log('ye restront', res);
    })
  }

  getDish(){
    let user:any = this.id;
    console.log(this.id);
    this.param = new HttpParams().append('id',this.id)
    this.api.getDishes(this.param).subscribe((res:any) => {
      this.allItems = res;
      console.log('ye menu',res);
    });
  }

  getCart() {
    return Storage.get({key:'cart'});
  }

  getItems() {
    this.isLoading = true;
    this.data = {};
    this.cartData = {};
    this.storedData = {};
    setTimeout(async () => {
      let data: any = this.restaurants.filter(x => x._id === this.id);
      this.data = data[0];
      this.items = this.allItems.filter(x => x.restaurant === this.data?._id)
      console.log('restaurant: ', this.data);
      let cart: any = await this.getCart()
      if(cart?.value){
        this.storedData = JSON.parse(cart.value);
        console.log('stored data:',this.storedData);
        if(this.id == this.storedData.restaurant._id && this.allItems.length > 0){
          this.allItems.forEach((element: any) => {
            this.storedData.items.forEach(ele => {
              if(element._id != ele._id) return;
              element.quantity = ele.quantity;
            })
          })
        }
        this.cartData.totalItem = this.storedData.totalItem;
        this.cartData.totalPrice = this.storedData.totalPrice;
      }
      this.isLoading = false;
    }, 3000);
  }

  vegOnly(event) {
    this.items = [];
    if(event.detail.checked == true)
    {
      this.items = this.allItems.filter(x => (x.restaurant === this.data?._id && x.veg === true))
    }
    else this.items = this.allItems.filter(x => x.restaurant === this.data?._id)
    console.log(event.detail.checked);
  }

  quantityPlus(index){
    try{
      if(this.items[index].quantity == undefined || this.items[index].quantity === 0){
        this.items[index].quantity = 1;
      } else {
        this.items[index].quantity += 1;
      }
      this.calculate();
    } catch(e) {
      console.log(e);
    }
  }

  quantityMinus(index){
    try{
      console.log(this.items[index]);
      if(this.items[index].quantity !== 0){
        this.items[index].quantity -= 1;
      } else {
        this.items[index].quantity = 0;
      }
      this.calculate();
    } catch(e) {
      console.log(e);
    }
  }

  async calculate(){
    // console.log(this.items);
    this.cartData.items = [];
    let item = this.items.filter(x => x.quantity > 0);
    // console.log('added item', item);
    this.cartData.items = item;
    this.cartData.totalPrice = 0;
    this.cartData.totalItem = 0;
    item.forEach(element => {
      this.cartData.totalItem += element.quantity;
      this.cartData.totalPrice += (parseFloat(element.quantity)*parseFloat(element.price));
    });
    this.cartData.totalPrice = parseFloat(this.cartData.totalPrice).toFixed(2);
    if(this.cartData.totalItem == 0)
    {
      this.cartData.totalItem = 0;
      this.cartData.totalPrice = 0;
    }
    // console.log('cart:', this.cartData);
    await this.saveToCart();
  }

  saveToCart(){
    try{
      this.cartData.restaurant = {};
      this.cartData.restaurant = this.data;
      console.log(this.cartData);
      Storage.set({
        key: 'cart',
        value: JSON.stringify(this.cartData)
      })
    } catch(e) {
      console.log(e);
    }
  }

  async viewCart() {
    if(this.cartData.items && this.cartData.items.length > 0){
      await this.saveToCart();
    }
    this.router.navigate([this.router.url+'/cart'])
  }
}

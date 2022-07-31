import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, NavController } from '@ionic/angular';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { OrderService } from 'src/app/services/order/order.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { CFPaymentServiceInstance } from 'cashfree-pg-capacitor';

declare var Razorpay: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  urlCheck: any;
  url: any;
  model: any = {};
  overHeads: number = 10;
  instruction: any;
  cartSub: Subscription;
  user: any;

  constructor(
    private router: Router,
    private orderService: OrderService,
    private global: GlobalService,
    private navCtrl: NavController,
    private cartService: CartService,
    private storage: StorageService,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.cartSub = this.cartService.cart.subscribe((cart) => {
      this.model = cart;
    });
    this.getData();
    // console.log('model: ',this.model);
  }

  async getData() {
    await this.getUser();
    await this.checkUrl();
    await this.cartService.getCartData();
  }

  async getUser() {
    let user: any = await this.storage.getStorage('user');
    // this.user = JSON.parse(this.user.value);
    if (user?.value) {
      this.user = await JSON.parse(user.value);
      console.log(this.user._id);
    }
  }

  checkUrl() {
    let url: any = this.router.url.split('/');
    const spliced = url.splice(url.length - 2, 2);
    this.urlCheck = spliced[0];
    url.push(this.urlCheck);
    this.url = url;
  }

  getPreviousUrl() {
    // console.log(this.url.join('/'));
    return this.url.join('/');
  }

  quantityPlus(index) {
    this.cartService.quantityPlus(index);
  }

  quantityMinus(index) {
    this.cartService.quantityMinus(index);
  }

  scrollToBottom() {
    this.content.scrollToBottom(500);
  }

  ionViewWillLeave() {
    console.log('ionView');
    if (this.model?.items && this.model.items.length > 0) {
      this.cartService.saveCart();
    }
  }
  place_data = {};
  async makePayment() {
    try {


      // const data = {
      //   restaurant_id: this.model.restaurant._id,
      //   user_id: this.user._id,
      //   orders: JSON.stringify(this.model.items),
      //   totalPrice: this.model.totalPrice,
      //   grandTotal: this.model.grandTotal,
      //   overHeads: this.model.overHeads,
      //   status: 'Created',
      //   paid: '',
      //   instruction: this.instruction,
      // };
      // let params = {
      //   appId: '236304d2fd74da59b658ac3c1c403632', //app-id here
      //   orderId: 'order0002',
      //   orderAmount: JSON.stringify(data.grandTotal),
      //   orderCurrency: 'INR',
      //   orderNote: 'Cashfree Test',
      //   customerName: 'Cashfree',
      //   customerPhone: '9999999999',
      //   customerEmail: 'test@email.com',
      //   stage: 'PROD',
      //   tokenData:
      //     'gM9JCN4MzUIJiOicGbhJCLiQ1VKJiOiAXe0Jye.829JyM4ADN0MWMiJWMkJjNiojI0xWYz9lIsITOzITM5cTN2EjOiAHelJCLiIlTJJiOik3YuVmcyV3QyVGZy9mIsEjOiQnb19WbBJXZkJ3biwiIzADMwIXZkJ3biojIklkclRmcvJye.DgZ1VvhVbrDgO1COVy6lz2hH7LjuERDWA0aVJ09iRcOzBljlnfuBCJNz9H7Ec-gyw8' //cftoken here
      // };
      // this.place_data = data;
      // console.log('place:', this.place_data);
      // CFPaymentServiceInstance.startPaymentWEB(params)
      //   .then((response) => {
      //     console.log('res',response);
      //     this.orderService.placeOrder(data);
      //     this.cartService.clearCart();
      //     this.global.successToast('Your Order is Placed Successfully');
      //     this.navCtrl.navigateRoot(['tabs/account']);
      //     console.log('this:',this.place_data);
      //     this.api.placeOrder(this.place_data).subscribe((res:any) => {
      //       console.log('yeaya:',res);
      //     })
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });

      //testing
      
      //testing

      var orderdata = {
        orderId: Math.floor(Math.random()*10000),
        orderAmount: this.model.grandTotal,
      }
      var res: any
      this.api.cftoken(orderdata).subscribe((val) => {
        res=val.body.cftoken;
        console.log(res);

        const data = {
          restaurant_id: this.model.restaurant._id,
          user_id: this.user._id,
          orders: JSON.stringify(this.model.items),
          totalPrice: this.model.totalPrice,
          grandTotal: this.model.grandTotal,
          overHeads: this.model.overHeads,
          status: 'Created',
          paid: '',
          instruction: this.instruction,
        };
        let params = {
          appId: '236304d2fd74da59b658ac3c1c403632', //app-id here
          orderId: orderdata.orderId,
          orderAmount: this.model.grandTotal,
          orderCurrency: 'INR',
          orderNote: 'Sigma phase',
          customerName: 'Anhad',
          customerPhone: '9876543210',
          customerEmail: 'test@email.com',
          stage: 'PROD',
          tokenData: res
            
        };
        this.place_data = data;
        console.log('place:', this.place_data);
        CFPaymentServiceInstance.startPaymentWEB(params)
          .then((response:any) => {
            console.log('res',response);
            if(response.txStatus!="CANCELLED")
            {
              this.orderService.placeOrder(data);
              this.cartService.clearCart();
              this.global.successToast('Your Order is Placed Successfully');
              this.navCtrl.navigateRoot(['tabs/account']);
              console.log('this:',this.place_data);
              this.api.placeOrder(this.place_data).subscribe((res:any) => {
                console.log('yeaya:',res);
              })
            }
            else{
              this.cartService.clearCart();
              this.global.errorToast('Your Transaction was not completed');
              this.navCtrl.navigateRoot(['tabs/account']);
            }
          })
      })
    } catch (e) {
      console.log(e);
    }
  }
}

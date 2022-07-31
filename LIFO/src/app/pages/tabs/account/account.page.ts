import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { OrderService } from 'src/app/services/order/order.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit, OnDestroy {

  isLoading: boolean;
  user: any;
  orderList:any[];
  orderSub: Subscription;
  param = {};

  constructor(private api: ApiService, private orderService: OrderService, private storage: StorageService, private router: Router, private global: GlobalService) { }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(async () => {
      await this.getData();
    }, 3000);
  }

  async getData(){
    let user:any = await this.storage.getStorage('user');
    // this.user = JSON.parse(this.user.value);
    if(user?.value)
      this.user = await JSON.parse(user.value);
    this.param = new HttpParams().append('id',this.user._id)
    this.api.getOrders(this.param).subscribe(order => {
      this.orderList = order;  
      for(let i=0; i<this.orderList.length; i++)
      {
        (this.orderList[i]).orders = (JSON.parse((this.orderList[i]).orders));
      }
      console.log('order data: ', order)
    });
    console.log('dat:',this.user);
    this.isLoading = false;
  }

  logout(){
    this.storage.removeStorage('user');
    this.router.navigateByUrl('/login');
  }

  reorder(order){
    console.log(order);
  }

  getHelp(order){
    console.log(order);
  }

  ngOnDestroy(){
    if(this.orderSub) this.orderSub.unsubscribe();
  }
}

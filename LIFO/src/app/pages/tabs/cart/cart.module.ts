import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { CartItemComponent } from 'src/app/components/cart-item/cart-item.component';
import { EmptyScreenComponent } from 'src/app/components/empty-screen/empty-screen.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule
  ],
  declarations: [CartPage, CartItemComponent, EmptyScreenComponent]
})
export class CartPageModule {}

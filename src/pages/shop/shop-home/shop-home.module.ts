import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopHomePage } from './shop-home';
import { ShopHomeModule } from '../../../components/shop/shop-home/shop-home.module';

@NgModule({
  declarations: [
    ShopHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ShopHomePage),
    ShopHomeModule
  ],
})

export class ShopHomePageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopCheckoutPage } from './shop-checkout';
import { ShopCheckoutModule} from '../../../components/shop/shop-checkout/shop-checkout.module';

@NgModule({
  declarations: [
    ShopCheckoutPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopCheckoutPage),
    ShopCheckoutModule
  ],
})
export class ShopCheckoutPageModule {}

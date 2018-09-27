import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopDetailProductPage } from './shop-detail-product';
import { ShopDetailProductModule} from '../../../components/shop/shop-detail-product/shop-detail-product.module';

@NgModule({
  declarations: [
    ShopDetailProductPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopDetailProductPage),
    ShopDetailProductModule
  ],
})
export class ShopDetailProductPageModule {}

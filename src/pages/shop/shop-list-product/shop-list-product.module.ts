import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopListProductPage } from './shop-list-product';
import { ShopListProductModule} from '../../../components/shop/shop-list-product/shop-list-product.module';

@NgModule({
  declarations: [
    ShopListProductPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopListProductPage),
    ShopListProductModule
  ],
})
export class ShopListProductPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopCategoryPage } from './shop-category';
import { ShopCategoryModule} from '../../../components/shop/shop-category/shop-category.module';

@NgModule({
  declarations: [
    ShopCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopCategoryPage),
    ShopCategoryModule
  ],
})
export class ShopCategoryPageModule {}

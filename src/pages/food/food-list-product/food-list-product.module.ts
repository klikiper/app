import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodListProductPage } from './food-list-product';
import { FoodListProductModule} from '../../../components/food/food-list-product/food-list-product.module';

@NgModule({
  declarations: [
    FoodListProductPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodListProductPage),
    FoodListProductModule
  ],
})
export class FoodListProductPageModule {}

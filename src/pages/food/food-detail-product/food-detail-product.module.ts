import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodDetailProductPage } from './food-detail-product';
import { FoodDetailProductModule} from '../../../components/food/food-detail-product/food-detail-product.module';

@NgModule({
  declarations: [
    FoodDetailProductPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodDetailProductPage),
    FoodDetailProductModule
  ],
})
export class FoodDetailProductPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodCheckoutPage } from './food-checkout';
import { FoodCheckoutModule} from '../../../components/food/food-checkout/food-checkout.module';

@NgModule({
  declarations: [
    FoodCheckoutPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodCheckoutPage),
    FoodCheckoutModule
  ],
})
export class FoodCheckoutPageModule {}

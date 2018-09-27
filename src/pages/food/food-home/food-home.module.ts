import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodHomePage } from './food-home';
import { FoodHomeModule } from '../../../components/food/food-home/food-home.module';

@NgModule({
  declarations: [
    FoodHomePage,
  ],
  imports: [
    IonicPageModule.forChild(FoodHomePage),
    FoodHomeModule
  ],
})

export class FoodHomePageModule {}

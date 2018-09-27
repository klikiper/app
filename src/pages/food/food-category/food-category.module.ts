import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodCategoryPage } from './food-category';
import { FoodCategoryModule} from '../../../components/food/food-category/food-category.module';

@NgModule({
  declarations: [
    FoodCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodCategoryPage),
    FoodCategoryModule
  ],
})
export class FoodCategoryPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodBlogPage } from './food-blog';
import { FoodBlogModule} from '../../../components/food/food-blog/food-blog.module';

@NgModule({
  declarations: [
    FoodBlogPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodBlogPage),
    FoodBlogModule
  ],
})
export class FoodBlogPageModule {}

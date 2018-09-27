import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodFavoritesPage } from './food-favorites';
import { FoodFavoritesModule} from '../../../components/food/food-favorites/food-favorites.module';

@NgModule({
  declarations: [
    FoodFavoritesPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodFavoritesPage),
    FoodFavoritesModule
  ],
})
export class FoodFavoritesPageModule {}

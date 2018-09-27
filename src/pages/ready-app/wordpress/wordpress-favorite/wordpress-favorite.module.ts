import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WordpressFavoritePage } from './wordpress-favorite';

@NgModule({
  declarations: [
    WordpressFavoritePage,
  ],
  imports: [
    IonicPageModule.forChild(WordpressFavoritePage),
  ],
})
export class WordpressFavoritePageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WordpressCategoryPage } from './wordpress-category';

@NgModule({
  declarations: [
    WordpressCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(WordpressCategoryPage),
  ],
})
export class WordpressCategoryPageModule {}

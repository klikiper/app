import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WordpressSearchPage } from './wordpress-search';

@NgModule({
  declarations: [
    WordpressSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(WordpressSearchPage),
  ],
})
export class WordpressSearchPageModule {}

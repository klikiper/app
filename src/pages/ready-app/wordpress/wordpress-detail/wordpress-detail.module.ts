import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WordpressDetailPage } from './wordpress-detail';

@NgModule({
  declarations: [
    WordpressDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(WordpressDetailPage),
  ],
})
export class WordpressDetailPageModule {}

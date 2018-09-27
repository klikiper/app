import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WordpressPostsPage } from './wordpress-posts';

@NgModule({
  declarations: [
    WordpressPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(WordpressPostsPage),
  ],
})
export class WordpressPostsPageModule {}

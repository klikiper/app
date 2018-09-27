import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstagramCommentPage } from './instagram-comment';

@NgModule({
  declarations: [
    InstagramCommentPage,
  ],
  imports: [
    IonicPageModule.forChild(InstagramCommentPage),
  ],
})
export class InstagramCommentPageModule {}

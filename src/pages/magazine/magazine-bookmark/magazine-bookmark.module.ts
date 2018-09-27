import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MagazineBookmarkPage } from './magazine-bookmark';
import { MagazineBookmarkModule } from '../../../components/magazine/magazine-bookmark/magazine-bookmark.module';

@NgModule({
  declarations: [
    MagazineBookmarkPage,
  ],
  imports: [
    IonicPageModule.forChild(MagazineBookmarkPage),
    MagazineBookmarkModule
  ],
})
export class MagazineBookmarkPageModule {}

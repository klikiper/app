import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnsplashModalPhotoPage } from './unsplash-modal-photo';

@NgModule({
  declarations: [
    UnsplashModalPhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(UnsplashModalPhotoPage),
  ],
})
export class UnsplashModalPhotoPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnsplashHomePage } from './unsplash-home';
import { InfoGalleryModule } from '../../../../components/gallery/info-gallery/info-gallery.module';

@NgModule({
  declarations: [
    UnsplashHomePage
  ],
  imports: [
    IonicPageModule.forChild(UnsplashHomePage),
    InfoGalleryModule
  ],
})
export class UnsplashHomePageModule {}

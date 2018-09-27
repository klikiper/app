import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnsplashFavoritePage } from './unsplash-favorite';
import { InfoGalleryModule } from '../../../../components/gallery/info-gallery/info-gallery.module';

@NgModule({
  declarations: [
    UnsplashFavoritePage,
  ],
  imports: [
    IonicPageModule.forChild(UnsplashFavoritePage),
    InfoGalleryModule
  ],
})
export class UnsplashFavoriestPageModule {}

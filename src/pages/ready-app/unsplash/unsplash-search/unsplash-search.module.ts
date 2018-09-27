import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnsplashSearchPage } from './unsplash-search';
import { InfoGalleryModule } from '../../../../components/gallery/info-gallery/info-gallery.module';

@NgModule({
  declarations: [
    UnsplashSearchPage
  ],
  imports: [
    IonicPageModule.forChild(UnsplashSearchPage),
    InfoGalleryModule
  ],
})

export class UnsplashSearchPageModule {

}

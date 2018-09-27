import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnsplashCategoryDetailPage } from './unsplash-category-detail';
import { InfoGalleryModule } from '../../../../components/gallery/info-gallery/info-gallery.module';

@NgModule({
  declarations: [
    UnsplashCategoryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(UnsplashCategoryDetailPage),
    InfoGalleryModule
  ],
})
export class UnsplashCategoryDetailPageModule {}

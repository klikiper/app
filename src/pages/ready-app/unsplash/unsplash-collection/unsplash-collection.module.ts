import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnsplashCollectionPage } from './unsplash-collection';

@NgModule({
  declarations: [
    UnsplashCollectionPage,
  ],
  imports: [
    IonicPageModule.forChild(UnsplashCollectionPage),
  ],
})
export class UnsplashCollectionPageModule {}

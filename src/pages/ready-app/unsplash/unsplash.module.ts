import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnsplashPage } from './unsplash';

@NgModule({
  declarations: [
    UnsplashPage,
  ],
  imports: [
    IonicPageModule.forChild(UnsplashPage),
  ],
})
export class UnsplashPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleryModalPage } from './gallery-modal';
import { GalleryModalModule } from '../../../components/gallery/gallery-modal/gallery-modal.module'

@NgModule({
  declarations: [
    GalleryModalPage
  ],
  imports: [
    IonicPageModule.forChild(GalleryModalPage),
    GalleryModalModule
  ],
})

export class GalleryModalPageModule {}

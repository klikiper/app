import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoCollectionPage } from './photo-collection';

@NgModule({
  declarations: [
    PhotoCollectionPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoCollectionPage),
  ],
})
export class PhotoCollectionPageModule {}

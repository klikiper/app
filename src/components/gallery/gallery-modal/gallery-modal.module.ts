import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleryModalComponent} from './gallery-modal';
import { MasonryModule } from 'angular2-masonry';

@NgModule({
    declarations: [
      GalleryModalComponent
    ],
    imports: [
     IonicPageModule.forChild(GalleryModalComponent),
     MasonryModule
    ],
    exports: [
      GalleryModalComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class GalleryModalModule { 
     
}

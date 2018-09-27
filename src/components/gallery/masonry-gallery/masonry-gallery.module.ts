import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasonryGalleryComponent} from './masonry-gallery';
import { MasonryModule } from 'angular2-masonry';

@NgModule({
    declarations: [
      MasonryGalleryComponent
    ],
    imports: [
     IonicPageModule.forChild(MasonryGalleryComponent),
     MasonryModule
    ],
    exports: [
      MasonryGalleryComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MasonryGalleryModule { 
    
}

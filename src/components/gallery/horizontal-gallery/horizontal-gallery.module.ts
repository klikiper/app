import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HorizontalGalleryComponent} from './horizontal-gallery';
@NgModule({
    declarations: [
      HorizontalGalleryComponent
    ],
    imports: [
    IonicPageModule.forChild(HorizontalGalleryComponent),
    ],
    exports: [
      HorizontalGalleryComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HorizontalGalleryModule { 
    
}

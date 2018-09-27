import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShotsGalleryComponent} from './shots-gallery';
@NgModule({
    declarations: [
      ShotsGalleryComponent
    ],
    imports: [
    IonicPageModule.forChild(ShotsGalleryComponent),
    ],
    exports: [
      ShotsGalleryComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ShotsGalleryModule { 
    
}

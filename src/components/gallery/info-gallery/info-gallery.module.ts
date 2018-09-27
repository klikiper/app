import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoGalleryComponent} from './info-gallery';
@NgModule({
    declarations: [
      InfoGalleryComponent
    ],
    imports: [
    IonicPageModule.forChild(InfoGalleryComponent),
    ],
    exports: [
      InfoGalleryComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class InfoGalleryModule { 
    
}

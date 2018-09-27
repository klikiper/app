import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GridGalleryComponent} from './grid-gallery';
@NgModule({
    declarations: [
      GridGalleryComponent
    ],
    imports: [
    IonicPageModule.forChild(GridGalleryComponent),
    ],
    exports: [
      GridGalleryComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class GridGalleryModule { 

}

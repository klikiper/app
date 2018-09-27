import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListedGalleryComponent} from './listed-gallery';
@NgModule({
    declarations: [
      ListedGalleryComponent
    ],
    imports: [
    IonicPageModule.forChild(ListedGalleryComponent),
    ],
    exports: [
      ListedGalleryComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ListedGalleryModule { 
    
}

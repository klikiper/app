import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MagazineBookmarkComponent } from './magazine-bookmark';
@NgModule({
    declarations: [
     MagazineBookmarkComponent,
    ],
    imports: [
     IonicPageModule.forChild(MagazineBookmarkComponent),
    ],
    exports: [
     MagazineBookmarkComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MagazineBookmarkModule { 
  
}

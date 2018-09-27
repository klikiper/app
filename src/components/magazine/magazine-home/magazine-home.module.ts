import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MagazineHomeComponent } from './magazine-home';
@NgModule({
    declarations: [
     MagazineHomeComponent,
    ],
    imports: [
     IonicPageModule.forChild(MagazineHomeComponent),
    ],
    exports: [
     MagazineHomeComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MagazineHomeModule { 
  
}

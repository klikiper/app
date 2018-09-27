import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MagazineListComponent } from './magazine-list';
@NgModule({
    declarations: [
     MagazineListComponent,
    ],
    imports: [
     IonicPageModule.forChild(MagazineListComponent),
    ],
    exports: [
     MagazineListComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MagazineListModule { 
  
}

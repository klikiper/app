import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MagazineCategoryComponent } from './magazine-category';

@NgModule({
    declarations: [
     MagazineCategoryComponent,
    ],
    imports: [
     IonicPageModule.forChild(MagazineCategoryComponent),
    ],
    exports: [
     MagazineCategoryComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MagazineCategoryModule { 
  
}
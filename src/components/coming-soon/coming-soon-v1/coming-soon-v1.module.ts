import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComingSoonV1Component } from './coming-soon-v1';
@NgModule({
    declarations: [
      ComingSoonV1Component,
    ],
    imports: [
    IonicPageModule.forChild(ComingSoonV1Component),
    ],
    exports: [
     ComingSoonV1Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComingSoonV1Module{ 

}

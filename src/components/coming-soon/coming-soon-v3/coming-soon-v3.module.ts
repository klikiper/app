import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComingSoonV3Component } from './coming-soon-v3';
@NgModule({
    declarations: [
      ComingSoonV3Component,
    ],
    imports: [
    IonicPageModule.forChild(ComingSoonV3Component),
    ],
    exports: [
     ComingSoonV3Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComingSoonV3Module{ 

}

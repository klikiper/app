import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComingSoonV2Component } from './coming-soon-v2';
@NgModule({
    declarations: [
      ComingSoonV2Component,
    ],
    imports: [
    IonicPageModule.forChild(ComingSoonV2Component),
    ],
    exports: [
     ComingSoonV2Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComingSoonV2Module { 

}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutV2Component } from './about-v2';
@NgModule({
    declarations: [
    AboutV2Component,
    ],
    imports: [
    IonicPageModule.forChild(AboutV2Component),
    ],
    exports: [
    AboutV2Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AboutV2Module { 

}

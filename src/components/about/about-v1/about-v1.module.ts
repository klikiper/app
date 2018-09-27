import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutV1Component } from './about-v1';
@NgModule({
    declarations: [
    AboutV1Component,
    ],
    imports: [
    IonicPageModule.forChild(AboutV1Component),
    ],
    exports: [
    AboutV1Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AboutV1Module { 

}

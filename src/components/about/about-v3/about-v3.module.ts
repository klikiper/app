import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutV3Component } from './about-v3';
@NgModule({
    declarations: [
    AboutV3Component,
    ],
    imports: [
    IonicPageModule.forChild(AboutV3Component),
    ],
    exports: [
    AboutV3Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AboutV3Module { 

}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileV3Component } from './profile-v3';
@NgModule({
    declarations: [
     ProfileV3Component,
    ],
    imports: [
    IonicPageModule.forChild(ProfileV3Component),
    ],
    exports: [
     ProfileV3Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ProfileV3Module { 
  
}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileV1Component } from './profile-v1';
@NgModule({
    declarations: [
     ProfileV1Component,
    ],
    imports: [
     IonicPageModule.forChild(ProfileV1Component),
    ],
    exports: [
     ProfileV1Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ProfileV1Module { 
  
}

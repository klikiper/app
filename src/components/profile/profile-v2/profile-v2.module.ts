import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileV2Component } from './profile-v2';
@NgModule({
    declarations: [
     ProfileV2Component,
    ],
    imports: [
    IonicPageModule.forChild(ProfileV2Component),
    ],
    exports: [
     ProfileV2Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ProfileV2Module { 
  
}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileV6Component } from './profile-v6';
@NgModule({
    declarations: [
     ProfileV6Component,
    ],
    imports: [
    IonicPageModule.forChild(ProfileV6Component),
    ],
    exports: [
     ProfileV6Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ProfileV6Module { 
  
}

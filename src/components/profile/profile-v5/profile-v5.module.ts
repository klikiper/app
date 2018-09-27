import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileV5Component } from './profile-v5';
@NgModule({
    declarations: [
     ProfileV5Component,
    ],
    imports: [
    IonicPageModule.forChild(ProfileV5Component),
    ],
    exports: [
     ProfileV5Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ProfileV5Module { 
  
}

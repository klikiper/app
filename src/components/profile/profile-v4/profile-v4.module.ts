import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileV4Component } from './profile-v4';
import { MasonryModule } from 'angular2-masonry';

@NgModule({
    declarations: [
     ProfileV4Component,
    ],
    imports: [
    IonicPageModule.forChild(ProfileV4Component),
    MasonryModule
    ],
    exports: [
     ProfileV4Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ProfileV4Module { 
  
}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginV7Component } from './login-v7';
@NgModule({
    declarations: [
        LoginV7Component,
    ],
    imports: [
        IonicPageModule.forChild(LoginV7Component),
    ],
    exports: [
        LoginV7Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginV7Module { 

}
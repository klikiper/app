import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginV3Component } from './login-v3';
@NgModule({
    declarations: [
        LoginV3Component,
    ],
    imports: [
        IonicPageModule.forChild(LoginV3Component),
    ],
    exports: [
        LoginV3Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginV3Module { 

}

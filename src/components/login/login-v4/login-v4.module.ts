import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginV4Component } from './login-v4';
@NgModule({
    declarations: [
        LoginV4Component,
    ],
    imports: [
        IonicPageModule.forChild(LoginV4Component),
    ],
    exports: [
        LoginV4Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginV4Module { 

}

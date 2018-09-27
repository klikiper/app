import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginV6Component } from './login-v6';
@NgModule({
    declarations: [
        LoginV6Component,
    ],
    imports: [
        IonicPageModule.forChild(LoginV6Component),
    ],
    exports: [
        LoginV6Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginV6Module { 

}

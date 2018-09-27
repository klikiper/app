import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginV5Component } from './login-v5';
@NgModule({
    declarations: [
        LoginV5Component,
    ],
    imports: [
        IonicPageModule.forChild(LoginV5Component),
    ],
    exports: [
        LoginV5Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginV5Module { 

}

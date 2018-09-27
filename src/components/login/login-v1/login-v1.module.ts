import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginV1Component } from './login-v1';
@NgModule({
    declarations: [
        LoginV1Component,
    ],
    imports: [
        IonicPageModule.forChild(LoginV1Component),
    ],
    exports: [
        LoginV1Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginV1Module { 

}

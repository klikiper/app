import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginV2Component } from './login-v2';
@NgModule({
    declarations: [
        LoginV2Component,
    ],
    imports: [
        IonicPageModule.forChild(LoginV2Component),
    ],
    exports: [
        LoginV2Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginV2Module { 

}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterV4Component } from './register-v4';
@NgModule({
    declarations: [
        RegisterV4Component,
    ],
    imports: [
        IonicPageModule.forChild(RegisterV4Component),
    ],
    exports: [
        RegisterV4Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RegisterV4Module { 

}

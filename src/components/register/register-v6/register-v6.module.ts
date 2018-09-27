import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterV6Component } from './register-v6';
@NgModule({
    declarations: [
        RegisterV6Component,
    ],
    imports: [
        IonicPageModule.forChild(RegisterV6Component),
    ],
    exports: [
        RegisterV6Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RegisterV6Module { 

}

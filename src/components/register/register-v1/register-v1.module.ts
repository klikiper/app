import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterV1Component } from './register-v1';
@NgModule({
    declarations: [
        RegisterV1Component,
    ],
    imports: [
        IonicPageModule.forChild(RegisterV1Component),
    ],
    exports: [
        RegisterV1Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RegisterV1Module { 

}

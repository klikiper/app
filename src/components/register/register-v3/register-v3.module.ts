import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterV3Component } from './register-v3';
@NgModule({
    declarations: [
        RegisterV3Component,
    ],
    imports: [
        IonicPageModule.forChild(RegisterV3Component),
    ],
    exports: [
        RegisterV3Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RegisterV3Module { 

}

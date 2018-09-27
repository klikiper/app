import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterV5Component } from './register-v5';
@NgModule({
    declarations: [
        RegisterV5Component,
    ],
    imports: [
        IonicPageModule.forChild(RegisterV5Component),
    ],
    exports: [
        RegisterV5Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RegisterV5Module { 

}

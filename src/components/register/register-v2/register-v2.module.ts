import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterV2Component } from './register-v2';
@NgModule({
    declarations: [
        RegisterV2Component,
    ],
    imports: [
        IonicPageModule.forChild(RegisterV2Component),
    ],
    exports: [
        RegisterV2Component
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RegisterV2Module { 

}

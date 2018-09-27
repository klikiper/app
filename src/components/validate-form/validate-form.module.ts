import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidateFormComponent } from './validate-form';
@NgModule({
    declarations: [
        ValidateFormComponent,
    ],
    imports: [
        IonicPageModule.forChild(ValidateFormComponent),
    ],
    exports: [
        ValidateFormComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ValidateFormModule { 

}

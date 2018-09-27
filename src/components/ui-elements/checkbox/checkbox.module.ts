import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckboxComponent } from './checkbox';
@NgModule({
    declarations: [
        CheckboxComponent,
    ],
    imports: [
        IonicPageModule.forChild(CheckboxComponent),
    ],
    exports: [
        CheckboxComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CheckboxModule { 

}

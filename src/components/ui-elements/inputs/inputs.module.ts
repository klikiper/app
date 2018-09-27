import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InputsComponent } from './inputs';
@NgModule({
    declarations: [
        InputsComponent,
    ],
    imports: [
        IonicPageModule.forChild(InputsComponent),
    ],
    exports: [
        InputsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class InputsModule { 

}

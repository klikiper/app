import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalBasicComponent } from './modal-basic';
@NgModule({
    declarations: [
        ModalBasicComponent,
    ],
    imports: [
        IonicPageModule.forChild(ModalBasicComponent),
    ],
    exports: [
        ModalBasicComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ModalBasicModule { 

}

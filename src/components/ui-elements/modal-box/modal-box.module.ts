import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalBoxComponent } from './modal-box';
@NgModule({
    declarations: [
        ModalBoxComponent,
    ],
    imports: [
        IonicPageModule.forChild(ModalBoxComponent),
    ],
    exports: [
        ModalBoxComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ModalBoxModule { 

}

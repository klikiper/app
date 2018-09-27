import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalMenuComponent } from './modal-menu';
@NgModule({
    declarations: [
        ModalMenuComponent,
    ],
    imports: [
        IonicPageModule.forChild(ModalMenuComponent),
    ],
    exports: [
        ModalMenuComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ModalMenuModule { 

}

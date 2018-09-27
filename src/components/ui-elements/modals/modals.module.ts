import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalsComponent } from './modals';
import { ModalBasicModule} from '../modal-basic/modal-basic.module';
@NgModule({
    declarations: [
        ModalsComponent,
    ],
    imports: [
        IonicPageModule.forChild(ModalsComponent),
        ModalBasicModule
    ],
    exports: [
        ModalsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ModalsModule { 

}

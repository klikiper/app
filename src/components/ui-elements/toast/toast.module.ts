import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToastComponent } from './toast';
@NgModule({
    declarations: [
        ToastComponent,
    ],
    imports: [
        IonicPageModule.forChild(ToastComponent),
    ],
    exports: [
        ToastComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ToastModule { 

}

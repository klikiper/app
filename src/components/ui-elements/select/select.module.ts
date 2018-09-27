import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectComponent } from './select';
@NgModule({
    declarations: [
        SelectComponent,
    ],
    imports: [
        IonicPageModule.forChild(SelectComponent),
    ],
    exports: [
        SelectComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SelectModule { 

}

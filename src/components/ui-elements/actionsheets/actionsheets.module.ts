import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionSheetsComponent } from './actionsheets';
@NgModule({
    declarations: [
        ActionSheetsComponent,
    ],
    imports: [
        IonicPageModule.forChild(ActionSheetsComponent),
    ],
    exports: [
        ActionSheetsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ActionSheetsModule { 

}

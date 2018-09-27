import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToolbarComponent } from './toolbar';
@NgModule({
    declarations: [
        ToolbarComponent,
    ],
    imports: [
        IonicPageModule.forChild(ToolbarComponent),
    ],
    exports: [
        ToolbarComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ToolbarModule { 

}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToggleComponent } from './toggle';
@NgModule({
    declarations: [
        ToggleComponent,
    ],
    imports: [
        IonicPageModule.forChild(ToggleComponent),
    ],
    exports: [
        ToggleComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ToggleModule { 

}

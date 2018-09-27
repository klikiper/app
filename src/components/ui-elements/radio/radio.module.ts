import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RadioComponent } from './radio';
@NgModule({
    declarations: [
        RadioComponent,
    ],
    imports: [
        IonicPageModule.forChild(RadioComponent),
    ],
    exports: [
        RadioComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RadioModule { 

}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RangeComponent } from './range';
@NgModule({
    declarations: [
        RangeComponent,
    ],
    imports: [
        IonicPageModule.forChild(RangeComponent),
    ],
    exports: [
        RangeComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RangeModule { 

}

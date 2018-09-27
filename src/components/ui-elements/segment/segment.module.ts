import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SegmentComponent } from './segment';
@NgModule({
    declarations: [
        SegmentComponent,
    ],
    imports: [
        IonicPageModule.forChild(SegmentComponent),
    ],
    exports: [
        SegmentComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SegmentModule { 

}

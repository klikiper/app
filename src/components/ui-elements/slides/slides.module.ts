import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidesComponent } from './slides';
@NgModule({
    declarations: [
        SlidesComponent,
    ],
    imports: [
        IonicPageModule.forChild(SlidesComponent),
    ],
    exports: [
        SlidesComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SlidesModule { 

}

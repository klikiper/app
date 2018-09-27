import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FABsComponent } from './fabs';
@NgModule({
    declarations: [
        FABsComponent,
    ],
    imports: [
        IonicPageModule.forChild(FABsComponent),
    ],
    exports: [
        FABsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FABsModule { 

}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverMainComponent } from './popover-main';
@NgModule({
    declarations: [
        PopoverMainComponent,
    ],
    imports: [
        IonicPageModule.forChild(PopoverMainComponent),
    ],
    exports: [
        PopoverMainComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PopoverMainModule { 

}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverComponent } from './popover';
@NgModule({
    declarations: [
        PopoverComponent,
    ],
    imports: [
        IonicPageModule.forChild(PopoverComponent)
    ],
    exports: [
        PopoverComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PopoverModule { 

}

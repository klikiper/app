import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ButtonsComponent } from './buttons';
@NgModule({
    declarations: [
        ButtonsComponent,
    ],
    imports: [
        IonicPageModule.forChild(ButtonsComponent),
    ],
    exports: [
        ButtonsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ButtonsModule { 

}

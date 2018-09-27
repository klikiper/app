import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DateTimeComponent } from './datetime';
@NgModule({
    declarations: [
        DateTimeComponent,
    ],
    imports: [
        IonicPageModule.forChild(DateTimeComponent),
    ],
    exports: [
        DateTimeComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DateTimeModule { 

}

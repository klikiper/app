import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BadgesComponent } from './badges';
@NgModule({
    declarations: [
        BadgesComponent,
    ],
    imports: [
        IonicPageModule.forChild(BadgesComponent),
    ],
    exports: [
        BadgesComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class BadgesModule { 

}

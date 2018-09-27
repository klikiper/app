import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardsComponent } from './cards';
@NgModule({
    declarations: [
        CardsComponent,
    ],
    imports: [
        IonicPageModule.forChild(CardsComponent),
    ],
    exports: [
        CardsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CardsModule { 

}

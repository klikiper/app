import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodHomeComponent } from './food-home';

@NgModule({
    declarations: [
        FoodHomeComponent,
    ],
    imports: [
        IonicPageModule.forChild(FoodHomeComponent),
    ],
    exports: [
        FoodHomeComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FoodHomeModule { 

}

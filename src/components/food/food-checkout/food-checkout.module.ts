import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodCheckoutComponent } from './food-checkout';
@NgModule({
    declarations: [
        FoodCheckoutComponent,
    ],
    imports: [
        IonicPageModule.forChild(FoodCheckoutComponent),
    ],
    exports: [
        FoodCheckoutComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FoodCheckoutModule { 

}

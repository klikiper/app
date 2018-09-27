import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodDetailProductComponent } from './food-detail-product';
@NgModule({
    declarations: [
        FoodDetailProductComponent,
    ],
    imports: [
        IonicPageModule.forChild(FoodDetailProductComponent),
    ],
    exports: [
        FoodDetailProductComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FoodDetailProductModule { 

}

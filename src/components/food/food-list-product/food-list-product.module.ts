import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodListProductComponent } from './food-list-product';
@NgModule({
    declarations: [
        FoodListProductComponent,
    ],
    imports: [
        IonicPageModule.forChild(FoodListProductComponent),
    ],
    exports: [
        FoodListProductComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FoodListProductModule { 

}

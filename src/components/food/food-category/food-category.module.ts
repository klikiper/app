import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodCategoryComponent } from './food-category';
@NgModule({
    declarations: [
        FoodCategoryComponent,
    ],
    imports: [
        IonicPageModule.forChild(FoodCategoryComponent),
    ],
    exports: [
        FoodCategoryComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FoodCategoryModule { 

}

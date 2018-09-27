import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodFavoritesComponent } from './food-favorites';
@NgModule({
    declarations: [
        FoodFavoritesComponent,
    ],
    imports: [
        IonicPageModule.forChild(FoodFavoritesComponent),
    ],
    exports: [
        FoodFavoritesComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FoodFavoritesModule { 

}

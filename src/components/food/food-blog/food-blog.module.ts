import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodBlogComponent } from './food-blog';
@NgModule({
    declarations: [
        FoodBlogComponent,
    ],
    imports: [
        IonicPageModule.forChild(FoodBlogComponent),
    ],
    exports: [
        FoodBlogComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FoodBlogModule { 

}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopCategoryComponent } from './shop-category';
@NgModule({
    declarations: [
        ShopCategoryComponent,
    ],
    imports: [
        IonicPageModule.forChild(ShopCategoryComponent),
    ],
    exports: [
        ShopCategoryComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ShopCategoryModule { 

}

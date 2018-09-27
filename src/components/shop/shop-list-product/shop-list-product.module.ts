import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopListProductComponent } from './shop-list-product';
@NgModule({
    declarations: [
        ShopListProductComponent,
    ],
    imports: [
        IonicPageModule.forChild(ShopListProductComponent),
    ],
    exports: [
        ShopListProductComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ShopListProductModule { 

}

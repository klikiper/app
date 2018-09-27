import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopDetailProductComponent } from '../shop-detail-product/shop-detail-product';

@NgModule({
    declarations: [
        ShopDetailProductComponent,
    ],
    imports: [
        IonicPageModule.forChild(ShopDetailProductComponent),
    ],
    exports: [
        ShopDetailProductComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class expandableHeaderShopModule { 

}

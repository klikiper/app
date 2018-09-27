import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopCheckoutComponent } from './shop-checkout';
@NgModule({
    declarations: [
        ShopCheckoutComponent,
    ],
    imports: [
        IonicPageModule.forChild(ShopCheckoutComponent),
    ],
    exports: [
        ShopCheckoutComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ShopCheckoutModule { 

}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopHomeComponent } from './shop-home';

@NgModule({
    declarations: [
        ShopHomeComponent,
    ],
    imports: [
        IonicPageModule.forChild(ShopHomeComponent),
    ],
    exports: [
        ShopHomeComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ShopHomeModule { 

}

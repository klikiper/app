import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopBlogComponent } from './shop-blog';
@NgModule({
    declarations: [
        ShopBlogComponent,
    ],
    imports: [
        IonicPageModule.forChild(ShopBlogComponent),
    ],
    exports: [
        ShopBlogComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ShopBlogModule { 

}

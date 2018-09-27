import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogBasicComponent } from './blog-basic';
@NgModule({
    declarations: [
        BlogBasicComponent,
    ],
    imports: [
        IonicPageModule.forChild(BlogBasicComponent),
    ],
    exports: [
        BlogBasicComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class BlogBasicModule { 

}

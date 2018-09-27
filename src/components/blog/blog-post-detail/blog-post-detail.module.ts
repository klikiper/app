import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogPostDetailComponent } from './blog-post-detail';
@NgModule({
    declarations: [
        BlogPostDetailComponent,
    ],
    imports: [
        IonicPageModule.forChild(BlogPostDetailComponent),
    ],
    exports: [
        BlogPostDetailComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class BlogPostDetailModule { 

}

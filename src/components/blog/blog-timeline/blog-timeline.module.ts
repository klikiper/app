import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogTimelineComponent } from './blog-timeline';
@NgModule({
    declarations: [
        BlogTimelineComponent,
    ],
    imports: [
        IonicPageModule.forChild(BlogTimelineComponent),
    ],
    exports: [
        BlogTimelineComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class BlogTimelineModule { 

}

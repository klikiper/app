import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicCategoryComponent } from './music-category';
@NgModule({
    declarations: [
        MusicCategoryComponent,
    ],
    imports: [
        IonicPageModule.forChild(MusicCategoryComponent),
    ],
    exports: [
        MusicCategoryComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MusicCategoryModule { 

}

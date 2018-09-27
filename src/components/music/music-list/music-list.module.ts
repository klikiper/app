import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicListComponent } from './music-list';
@NgModule({
    declarations: [
        MusicListComponent,
    ],
    imports: [
        IonicPageModule.forChild(MusicListComponent),
    ],
    exports: [
        MusicListComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MusicListModule { 

}

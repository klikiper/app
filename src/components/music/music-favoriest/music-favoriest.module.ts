import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicFavoriestComponent } from './music-favoriest';
@NgModule({
    declarations: [
        MusicFavoriestComponent,
    ],
    imports: [
        IonicPageModule.forChild(MusicFavoriestComponent),
    ],
    exports: [
        MusicFavoriestComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MusicFavoriestModule { 

}

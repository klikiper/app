import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicPlayerComponent } from './music-player';
@NgModule({
    declarations: [
        MusicPlayerComponent,
    ],
    imports: [
        IonicPageModule.forChild(MusicPlayerComponent),
    ],
    exports: [
        MusicPlayerComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MusicPlayerModule { 

}

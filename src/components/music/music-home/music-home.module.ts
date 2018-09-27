import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicHomeComponent } from './music-home';

@NgModule({
    declarations: [
        MusicHomeComponent,
    ],
    imports: [
        IonicPageModule.forChild(MusicHomeComponent),
    ],
    exports: [
        MusicHomeComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MusicHomeModule { 

}

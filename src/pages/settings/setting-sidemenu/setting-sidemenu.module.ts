import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingSidemenuPage } from './setting-sidemenu';
@NgModule({
    declarations: [
        SettingSidemenuPage,
    ],
    imports: [
        IonicPageModule.forChild(SettingSidemenuPage),
    ],
})

export class SettingSidemenuPageModule { 

}

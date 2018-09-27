import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingColorPage } from './setting-color';
@NgModule({
    declarations: [
        SettingColorPage,
    ],
    imports: [
        IonicPageModule.forChild(SettingColorPage),
    ],
})

export class SettingColorPageModule { 

}

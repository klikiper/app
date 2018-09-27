import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingDashboardPage } from './setting-dashboard';
@NgModule({
    declarations: [
        SettingDashboardPage,
    ],
    imports: [
        IonicPageModule.forChild(SettingDashboardPage),
    ],
})

export class SettingDashboardPageModule { 

}

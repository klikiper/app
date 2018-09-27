import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertsComponent } from './alerts';
@NgModule({
    declarations: [
        AlertsComponent,
    ],
    imports: [
        IonicPageModule.forChild(AlertsComponent),
    ],
    exports: [
        AlertsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AlertsModule {

}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsComponent } from './tabs';
@NgModule({
    declarations: [
        TabsComponent,
    ],
    imports: [
        IonicPageModule.forChild(TabsComponent),
    ],
    exports: [
        TabsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TabsModule { 

}

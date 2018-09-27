import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenusComponent } from './menus';
@NgModule({
    declarations: [
        MenusComponent,
    ],
    imports: [
        IonicPageModule.forChild(MenusComponent),
    ],
    exports: [
        MenusComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MenusModule { 

}

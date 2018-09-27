import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListsComponent } from './lists';
@NgModule({
    declarations: [
        ListsComponent,
    ],
    imports: [
        IonicPageModule.forChild(ListsComponent),
    ],
    exports: [
        ListsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ListsModule { 

}

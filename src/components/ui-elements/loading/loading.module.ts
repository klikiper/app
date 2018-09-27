import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoadingComponent } from './loading';
@NgModule({
    declarations: [
        LoadingComponent,
    ],
    imports: [
        IonicPageModule.forChild(LoadingComponent),
    ],
    exports: [
        LoadingComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoadingModule { 

}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuccessSignupComponent } from './success-signup';
@NgModule({
    declarations: [
        SuccessSignupComponent,
    ],
    imports: [
        IonicPageModule.forChild(SuccessSignupComponent),
    ],
    exports: [
        SuccessSignupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SuccessSignupModule { 

}

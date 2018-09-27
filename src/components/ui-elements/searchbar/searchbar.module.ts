import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchbarComponent } from './searchbar';
@NgModule({
    declarations: [
        SearchbarComponent,
    ],
    imports: [
        IonicPageModule.forChild(SearchbarComponent),
    ],
    exports: [
        SearchbarComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SearchbarModule { 

}

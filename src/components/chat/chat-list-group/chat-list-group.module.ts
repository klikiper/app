import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatListGroupComponent } from './chat-list-group';
@NgModule({
    declarations: [
     ChatListGroupComponent,
    ],
    imports: [
    IonicPageModule.forChild(ChatListGroupComponent),
    ],
    exports: [
      ChatListGroupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ChatListGroupModule{
    
}

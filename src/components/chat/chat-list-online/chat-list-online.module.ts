import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatListOnlineComponent } from './chat-list-online';
@NgModule({
    declarations: [
     ChatListOnlineComponent,
    ],
    imports: [
    IonicPageModule.forChild(ChatListOnlineComponent),
    ],
    exports: [
      ChatListOnlineComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ChatListOnlineModule{
    
}

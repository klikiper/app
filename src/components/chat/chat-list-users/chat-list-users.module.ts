import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatListUsersComponent } from './chat-list-users';
@NgModule({
    declarations: [
     ChatListUsersComponent,
    ],
    imports: [
    IonicPageModule.forChild(ChatListUsersComponent),
    ],
    exports: [
      ChatListUsersComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ChatListUsersModule{
    
}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatConversationComponent } from './chat-conversation';
@NgModule({
    declarations: [
     ChatConversationComponent,
    ],
    imports: [
    IonicPageModule.forChild(ChatConversationComponent),
    ],
    exports: [
      ChatConversationComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ChatConversationModule{
    
}

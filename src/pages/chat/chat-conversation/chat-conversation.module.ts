import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatConversationPage } from './chat-conversation';
import { ChatConversationModule} from '../../../components/chat/chat-conversation/chat-conversation.module';

@NgModule({
  declarations: [
    ChatConversationPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatConversationPage),
    ChatConversationModule
  ],
})
export class ChatConversationPageModule {}

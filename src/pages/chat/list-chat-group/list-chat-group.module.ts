import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListChatGroupPage } from './list-chat-group';
import { ChatListGroupModule} from '../../../components/chat/chat-list-group/chat-list-group.module';

@NgModule({
  declarations: [
    ListChatGroupPage,
  ],
  imports: [
    IonicPageModule.forChild(ListChatGroupPage),
    ChatListGroupModule
  ],
})
export class ListChatGroupPageModule {}

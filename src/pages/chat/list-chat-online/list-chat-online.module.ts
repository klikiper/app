import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListChatOnlinePage } from './list-chat-online';
import { ChatListOnlineModule} from '../../../components/chat/chat-list-online/chat-list-online.module';


@NgModule({
  declarations: [
    ListChatOnlinePage,
  ],
  imports: [
    IonicPageModule.forChild(ListChatOnlinePage),
    ChatListOnlineModule
  ],
})
export class ListChatOnlinePageModule {}

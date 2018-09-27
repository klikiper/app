import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListChatUsersPage } from './list-chat-users';
import { ChatListUsersModule} from '../../../components/chat/chat-list-users/chat-list-users.module';



@NgModule({
  declarations: [
    ListChatUsersPage,
  ],
  imports: [
    IonicPageModule.forChild(ListChatUsersPage),
    ChatListUsersModule
  ],
})
export class ListChatUsersPageModule {}

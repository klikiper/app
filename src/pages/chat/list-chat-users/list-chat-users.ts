import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ChatListUsersModule} from '../../../components/chat/chat-list-users/chat-list-users.module';

/**
 * Generated class for the ListChatUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-list-chat-users',
 	templateUrl: 'list-chat-users.html',
 })
 export class ListChatUsersPage {
 	events:any={};
 	data:any={};
 	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

 		this.data={ 
 			txtFromYou: 'Form You',
 			txtFromDay: 'From Day',
 		};

 		this.events.openConversation=function(item){
 			let chatModal = modalCtrl.create('ChatConversationPage',{'data':item});
            chatModal.present();
 		}

 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad ListChatUsersPage');
 	}

 }

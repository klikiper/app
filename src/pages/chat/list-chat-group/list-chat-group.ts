import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the ListChatGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-list-chat-group',
 	templateUrl: 'list-chat-group.html',
 })
 export class ListChatGroupPage {
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
 		console.log('ionViewDidLoad ListChatGroupPage');
 	}

 }

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController, ModalController} from 'ionic-angular';
/**
 * Generated class for the ChatConversationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
 	selector: 'page-chat-conversation',
 	templateUrl: 'chat-conversation.html',
 })
 export class ChatConversationPage {
 	data: any={};
 	events: any={};

 	constructor(public navCtrl: NavController,
 	 public navParams: NavParams, 
 	 public viewCtrl:ViewController,
 	 public modalCtrl:ModalController
 	  ) {
 		this.events.openConversation=function(item){
 			let chatModal = modalCtrl.create('ChatConversationPage',{'data':item});
 			chatModal.present();
 		}
 	}

 	dismiss(){
        this.viewCtrl.dismiss();
    }

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad ChatConversationPage');
 	}
}

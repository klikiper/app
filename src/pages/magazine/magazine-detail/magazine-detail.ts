import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MagazineListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-magazine-detail',
 	templateUrl: 'magazine-detail.html',
 })
 export class MagazineDetailPage {
 	data: any={};
 	events: any={};

 	constructor(public navCtrl: NavController, public navParams: NavParams) {

 		this.events.openDetail=function(item){
 			// let chatModal = modalCtrl.create('ChatConversationPage',{'data':item});
 			// chatModal.present();
 			navCtrl.push('MagazineDetailPage');
 		}
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad MagazineDetailPage');
 	}

 }

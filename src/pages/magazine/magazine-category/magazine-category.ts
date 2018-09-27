import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MagazineCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-magazine-category',
 	templateUrl: 'magazine-category.html',
 })
 export class MagazineCategoryPage {
 	events: any={};
 	data: any={};
 	
 	constructor(public navCtrl: NavController, public navParams: NavParams) {

 		this.events.openList=function(item){
 			// let chatModal = modalCtrl.create('ChatConversationPage',{'data':item});
 			// chatModal.present();
 			navCtrl.push('MagazineListPage');
 		}
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad MagazineCategoryPage');
 	}

 }

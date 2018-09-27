import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
/**
 * Generated class for the ComingSoonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
 	selector: 'page-coming-soon',
 	templateUrl: 'coming-soon.html',
 })
 export class ComingSoonPage {
 	page: any;
 	data: any={};
 	events: any={};
 	
 	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
 		this.page=this.navParams.get('page');
 		this.data = {
 			days: 3,
 			hours: 17,
 			minutes: 33,
 			seconds: 25
 		};
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad ComingSoonPage');
 	}

 }

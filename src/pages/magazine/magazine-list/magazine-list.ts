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
 	selector: 'page-magazine-list',
 	templateUrl: 'magazine-list.html',
 })
 export class MagazineListPage {
 	data: any={};
 	events: any={};

 	constructor(public navCtrl: NavController, public navParams: NavParams) {

 		this.events.openDetail = function(item){
 			navCtrl.push('MagazineDetailPage');
 		}
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad MagazineListPage');
 	}

 }

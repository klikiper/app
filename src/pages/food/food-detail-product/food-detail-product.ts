import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the ShopDetailProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-food-detail-product',
 	templateUrl: 'food-detail-product.html',
 })
 export class FoodDetailProductPage {
 	data: any={};
 	events: any={};
 	
 	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {

 		this.events.openDetail=function(item){
 			let chatModal = modalCtrl.create('FoodDetailProductPage',{'data':item});
 			chatModal.present();
 		}
 	}

 	dismiss(){
 		this.viewCtrl.dismiss();
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad FoodDetailProductPage');
 	}

 }

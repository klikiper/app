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
 	selector: 'page-shop-detail-product',
 	templateUrl: 'shop-detail-product.html',
 })
 export class ShopDetailProductPage {
 	data: any={};
 	events: any={};
 	
 	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {

 		this.events.openDetail=function(item){
 			let chatModal = modalCtrl.create('ShopDetailProductPage',{'data':item});
 			chatModal.present();
 		}
 	}

 	dismiss(){
 		this.viewCtrl.dismiss();
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad ShopDetailProductPage');
 	}

 }

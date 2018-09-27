import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the ShopCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-food-checkout',
 	templateUrl: 'food-checkout.html',
 })
 export class FoodCheckoutPage {
 	data: any={};
 	events: any={};
 	
 	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

 		this.events.openDetail=function(item){
 			let detailProductModal = modalCtrl.create('FoodDetailProductPage',{'data':item});
 			detailProductModal.present();
 		}

 		this.events.openList=function(item){
 			navCtrl.push('FoodCheckoutPage');
 		}
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad FoodCheckoutPage');
 	}

 }

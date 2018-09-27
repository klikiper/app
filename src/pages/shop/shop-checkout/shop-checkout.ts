import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShopCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-shop-checkout',
 	templateUrl: 'shop-checkout.html',
 })
 export class ShopCheckoutPage {
 	data: any={};
 	events: any={};
 	
 	constructor(public navCtrl: NavController, public navParams: NavParams) {

 		this.events.openList=function(item){
 			navCtrl.push('ShopCheckoutPage');
 		}
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad ShopCheckoutPage');
 	}

 }

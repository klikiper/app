import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the ShopHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-shop-home',
 	templateUrl: 'shop-home.html',
 })
 export class ShopHomePage {
 	data: any={};
 	events: any={};
 	check_search: boolean = false;
 	
 	constructor(
 	 public navCtrl: NavController,
 	 public navParams: NavParams,
 	 public modalCtrl: ModalController) {
 	
 		this.events.openDetail=function(item){
 			let detailProductModal = modalCtrl.create('ShopDetailProductPage',{'data':item});
 			detailProductModal.present();
 		}

 		this.events.openList=function(item){
 			navCtrl.push('ShopListProductPage');
 		}
 	}

 	openCart(){
 		this.navCtrl.push('ShopCheckoutPage');
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad ShopHomePage');
 	}


 	show_search(){
 		if(this.check_search == true){
 			this.check_search = false;
 		}else{
 			this.check_search = true;
 		}
 	}

 }

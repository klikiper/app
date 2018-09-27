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
 	selector: 'page-food-home',
 	templateUrl: 'food-home.html',
 })
 export class FoodHomePage {
 	data: any={};
 	events: any={};
 	check_search: boolean = false;
 	
 	constructor(
 	 public navCtrl: NavController,
 	 public navParams: NavParams,
 	 public modalCtrl: ModalController) {
 	
 		this.events.openDetail=function(item){
 			let detailProductModal = modalCtrl.create('FoodDetailProductPage',{'data':item});
 			detailProductModal.present();
 		}

 		this.events.openList=function(item){
 			navCtrl.push('FoodListProductPage');
 		}
 	}

 	openCart(){
 		this.navCtrl.push('FoodCheckoutPage');
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad FoodHomePage');
 	}


 	show_search(){
 		if(this.check_search == true){
 			this.check_search = false;
 		}else{
 			this.check_search = true;
 		}
 	}

 }

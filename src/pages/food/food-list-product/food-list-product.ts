import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the ShopDetailProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-food-list-product',
 	templateUrl: 'food-list-product.html',
 })
 export class FoodListProductPage {
 	data: any={};
 	events: any={};

 	check_search: boolean = false;

 	
 	constructor(public navParams: NavParams, public modalCtrl: ModalController, public navCtrl: NavController) {

 		this.events.openDetail=function(item){
 			let detailProductModal = modalCtrl.create('FoodDetailProductPage',{'data':item});
 			detailProductModal.present();
 		}
 	}

 	open_cart(){
 		this.navCtrl.push('FoodCheckoutPage');
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad FoodListProductPage');
 	}


 	show_search(){
 		if(this.check_search == true){
 			this.check_search = false;
 		}else{
 			this.check_search = true;
 		}
 	}

 }

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController} from 'ionic-angular';

/**
 * Generated class for the ShopBlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-food-favorites',
 	templateUrl: 'food-favorites.html',
 })
 export class FoodFavoritesPage {
 	data: any={};
 	events: any={};

 	check_search: boolean = false;

 	
 	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

 		this.events.openDetailBlog=function(item){
 			let foodModal = modalCtrl.create('FoodDetailProductPage',{'data':item});
 			foodModal.present();
 		}
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad FoodFavoritesPage');
 	}

 	open_cart(){
 		this.navCtrl.push('FoodCheckoutPage');
 	}


 	show_search(){
 		if(this.check_search == true){
 			this.check_search = false;
 		}else{
 			this.check_search = true;
 		}
 	}

 }

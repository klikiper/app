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
 	selector: 'page-food-category',
 	templateUrl: 'food-category.html',
 })
 export class FoodCategoryPage {
 	data: any={};
 	events: any={};
 	
 	constructor(public navCtrl: NavController, public navParams: NavParams) {

 		this.events.openList=function(item){
 			navCtrl.push('FoodListProductPage');
 		}
 	}

 	open_cart(){
 		this.navCtrl.push('FoodCheckoutPage');
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad FoodCategoryPage');
 	}

 }

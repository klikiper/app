import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Tabs } from 'ionic-angular';

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage({segment:'food-page'})
 @Component({
 	selector: 'page-food',
 	templateUrl: 'food.html',
 })
 export class FoodPage {	
 	@ViewChild('tabs') tabRef: Tabs;
 	foodBlogPage:any='FoodBlogPage';
 	foodCategoryPage:any='FoodCategoryPage';
 	foodFavoritesPage:any='FoodFavoritesPage';
 	foodHomePage:any='FoodHomePage';

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 	
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad ShopPage');
      
 	}

 	ionViewDidEnter(){
 		  this.tabRef.select(0);
 		  this.foodHomePage='FoodHomePage';
 		  //this.tabRef.setTabP
 	}

 }

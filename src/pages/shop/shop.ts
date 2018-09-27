import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Tabs } from 'ionic-angular';

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage({segment:'shop-page'})
 @Component({
 	selector: 'page-shop',
 	templateUrl: 'shop.html',
 })
 export class ShopPage {	
 	@ViewChild('tabs') tabRef: Tabs;
 	shopBlogPage:any='ShopBlogPage';
 	shopCategoryPage:any='ShopCategoryPage';
 	shopDetailProductPage:any='ShopDetailProductPage';
 	shopHomePage:any='ShopHomePage';

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 	
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad ShopPage');
      
 	}

 	ionViewDidEnter(){
 		  this.tabRef.select(0);
 		  this.shopHomePage='ShopHomePage';
 		  //this.tabRef.setTabP
 	}

 }

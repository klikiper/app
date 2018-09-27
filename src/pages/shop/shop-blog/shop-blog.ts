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
 	selector: 'page-shop-blog',
 	templateUrl: 'shop-blog.html',
 })
 export class ShopBlogPage {
 	data: any={};
 	events: any={};

 	check_search: boolean = false;

 	
 	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

 		this.events.openDetailBlog=function(item){
 			let blogModal = modalCtrl.create('BlogDetailPage',{'data':item});
 			blogModal.present();
 		}
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad ShopBlogPage');
 	}

 	open_cart(){
 		this.navCtrl.push('ShopCheckoutPage');
 	}


 	show_search(){
 		if(this.check_search == true){
 			this.check_search = false;
 		}else{
 			this.check_search = true;
 		}
 	}

 }

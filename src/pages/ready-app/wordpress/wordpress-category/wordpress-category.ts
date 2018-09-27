import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WordpressService } from '../../../../providers/wordpress/wordpress';
/**
 * Generated class for the WordpressCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-wordpress-category',
 	templateUrl: 'wordpress-category.html',
 })
 export class WordpressCategoryPage {
 	data:any=new Array();
 	events: any={};
 	page:number=0;
 	per_page:number=15;
 	spnState:string='show';

 	constructor(
 		public navCtrl: NavController,
 		public navParams: NavParams,
 		public wpService:WordpressService
 		) {
 	}

 	loadMore(infiniteScroll:any=null){
 		this.page+=1;
 		this.wpService.getCategorys(this.page,this.per_page).subscribe(data=>{
 			this.data=this.data.concat(data);
 			this.spnState='hide';
 			if(infiniteScroll){
 				infiniteScroll.complete();
 			}
 		},error=>{
 			this.spnState='hide';
 			if(infiniteScroll!=null){
 				infiniteScroll.enable(false);
 			}
 		})
 	}

 	ionViewDidLoad() {
 		this.loadMore();
 	}
 }

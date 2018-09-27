import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UnsplashService } from '../../../../providers/unsplash-service/unsplash-service';
/**
 * Generated class for the UnsplashCollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-unsplash-collection',
 	templateUrl: 'unsplash-collection.html',
 })
 export class UnsplashCollectionPage {
 	list:any=new Array();
 	page:number=0;
 	per_page:number=20;
 	spnState:string='show';

 	constructor(public navCtrl: NavController,
 		public unsplashService:UnsplashService,
 		public navParams: NavParams) {
 	}

 	loadMore(infiniteScroll:any=null){
 		this.page+=1;
 		this.unsplashService.getCollections(this.page,this.per_page).subscribe(data=>{
 			this.list=this.list.concat(data);
 			if(infiniteScroll){
 				infiniteScroll.complete();
 			}
 			  this.spnState='hide';
 		},error=>{
 			if(infiniteScroll!=null){
 				infiniteScroll.enable(false);
 			}
 			this.spnState='hide';
 		})
 	}

 	ionViewDidLoad() {
 		this.loadMore();
 	}

 	detail(item){
 		console.log(item.id);
 		this.navCtrl.push('UnsplashCategoryDetailPage',{id:item.id,collection_name:item.title});
 	}
 }

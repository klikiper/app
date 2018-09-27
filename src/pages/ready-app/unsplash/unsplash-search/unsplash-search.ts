import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UnsplashService } from '../../../../providers/unsplash-service/unsplash-service';
import { LoadingService } from '../../../../providers/loading-service/loading-service';
/**
 * Generated class for the UnsplashSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-unsplash-search',
 	templateUrl: 'unsplash-search.html',
 })
 export class UnsplashSearchPage {
 	data:any=new Array();
 	events: any={};
 	page:number=0;
 	per_page:number=20;
 	query:string='';
 	spnState:string='show';

 	constructor(public navCtrl: NavController,
 		public navParams: NavParams,
 		public unsplashService:UnsplashService) {
 	}

 	loadMore(infiniteScroll:any=null){
 		this.page+=1;
 		this.unsplashService.searchPhotos(this.query,this.page,this.per_page).subscribe(data=>{
 			for (var i = 0; i < data.results.length; i++) {
 				this.data.push({
 					'path':data.results[i].urls.regular,
 					'title':'Photo by '+data.results[i].user.name
 				});
 			}
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

 	onInput(){
 		this.page=0;
 		this.data=[];
 		 this.spnState='show';
 		this.loadMore();
 	}

 	ionViewDidLoad() {
 		this.loadMore();
 	}

 }

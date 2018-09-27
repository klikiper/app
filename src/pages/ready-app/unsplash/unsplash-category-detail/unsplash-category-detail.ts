import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { UnsplashService } from '../../../../providers/unsplash-service/unsplash-service';
/**
 * Generated class for the UnsplashCategoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-unsplash-category-detail',
 	templateUrl: 'unsplash-category-detail.html',
 })
 export class UnsplashCategoryDetailPage {
 	collectionId:number;
 	data:any=new Array();
 	events: any={};
 	page:number=0;
 	per_page:number=20;
 	collection_name:string='';
 	spnState:string='show';

 	constructor(
 		public navCtrl: NavController,
 		public navParams: NavParams,
 		public modalCtrl:ModalController,
 		public unsplashService:UnsplashService) {
 		this.collectionId=this.navParams.get('id');
 		this.collection_name=this.navParams.get('collection_name');
 	}

 	loadMore(infiniteScroll:any=null){
 		this.page+=1;
 		this.unsplashService.getPhotosByCollection(this.collectionId,this.page,this.per_page).subscribe(data=>{
 			for (var i = 0; i < data.length; i++) {
 				this.data.push({
 					'id':data[i].id,
 					'path':data[i].urls.regular,
 					'title':'Photo by '+data[i].user.name
 				});
 			}
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
 		this.events.onClick=function(item){
 			let myModal = this.modalCtrl.create('UnsplashModalPhotoPage',{'data':item});
 			myModal.present();
 		}
 	}
 }

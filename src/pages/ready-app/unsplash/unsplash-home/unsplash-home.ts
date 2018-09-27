import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { UnsplashService } from '../../../../providers/unsplash-service/unsplash-service';
/**
 * Generated class for the UnsplashHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-unsplash-home',
 	templateUrl: 'unsplash-home.html',
 })
 export class UnsplashHomePage {
 	data:any=new Array();
 	events: any={};
 	page:number=0;
 	per_page:number=20;
 	spnState:string='show';
 	
 	constructor(
 		public navCtrl: NavController,
 		public navParams: NavParams,
 		public modalCtrl:ModalController,
 		public unsplashService:UnsplashService) {
 	}

 	loadMore(infiniteScroll:any=null){
 		this.page+=1;
 		this.unsplashService.getPhotos(this.page,this.per_page).subscribe(data=>{
 			for (var i = 0; i < data.length; i++) {
 				this.data.push({
 					'id':data[i].id,
 					'path':data[i].urls.regular,
 					'title':'<span class="photo-by">Photo by</span>&nbsp;<strong>'+data[i].user.name+'</strong>',
 					'links':data[i].links
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
 		let that =this;
 		this.events.onClick=function(item){
 			let myModal = that.modalCtrl.create('UnsplashModalPhotoPage',{'data':item});
 			myModal.present();
 		}
 	}
 }

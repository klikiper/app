import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { UnsplashService } from '../../../../providers/unsplash-service/unsplash-service';
/**
* Generated class for the UnsplashFavoriestPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
	selector: 'page-unsplash-favorite',
	templateUrl: 'unsplash-favorite.html',
})
export class UnsplashFavoritePage {
	data:any=new Array();
	events: any={};
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public unsplashService:UnsplashService,
		public modalCtrl:ModalController
		) {
	}

	ionViewDidEnter(){
		this.data=new Array();
		let that=this;
		this.unsplashService.getAllFavorites().then(result=>{
			for (var i = 0; i < result.length; i++) {
				this.data.push({
					'id':result[i].id,
					'path':result[i].path,
					'title':'Photo by '+result[i].title,
					'links':result[i].links,
					'isFavorite':true
				});
			}

			this.events.onClick=function(item){
				let myModal = that.modalCtrl.create('UnsplashModalPhotoPage',{'data':item});
				myModal.present();
			}
		})
	}

	removeAll(){
		this.unsplashService.clearAllFavorite();
		this.data=new Array();
	}

}

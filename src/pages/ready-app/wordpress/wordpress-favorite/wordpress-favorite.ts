import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WordpressService } from '../../../../providers/wordpress/wordpress';
/**
 * Generated class for the WordpressFavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-wordpress-favorite',
 	templateUrl: 'wordpress-favorite.html',
 })
 export class WordpressFavoritePage {
 	data:any=new Array();
 	constructor(
 		public navCtrl: NavController,
 		public navParams: NavParams,
 		public wpService:WordpressService
 		) {
 	}

 	ionViewDidEnter(){
 		this.data=new Array();
 		let that=this;
 		this.wpService.getAllFavorites().then(result=>{
 			this.data=result;
 		})
 	}

 	doFavorite(item){
 		this.wpService.doFavorite(item);
 		let index = this.wpService.getIndexOf(item.id,this.data);
        if(index !=-1){
          this.data.splice(index, 1);
        }
 	}

 	doClear(){
 		this.wpService.clearAllFavorite();
 		this.data=new Array();
 	}
 
 }

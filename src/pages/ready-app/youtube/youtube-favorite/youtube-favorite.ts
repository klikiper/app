import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeService } from '../../../../providers/youtube-service/youtube-service';
/**
 * Generated class for the YoutubeFavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-youtube-favorite',
  templateUrl: 'youtube-favorite.html',
})
export class YoutubeFavoritePage {
	data:any=new Array();
	events: any={};
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public ytService:YoutubeService
		) {
	}

	ionViewDidEnter(){
		this.data=new Array();
		this.ytService.getAllFavorites().then(result=>{
			this.data=result;
		})
	}

	doFavorite(item){
 		this.ytService.doFavorite(item);
 		let index = this.ytService.getIndexOf(item.id.videoId,this.data);
        if(index !=-1){
          this.data.splice(index, 1);
        }
 	}

 	doClear(){
 		this.ytService.clearAllFavorite();
 		this.data=new Array();
 	}
}

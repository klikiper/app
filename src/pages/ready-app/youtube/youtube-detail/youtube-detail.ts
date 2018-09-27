import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeService } from '../../../../providers/youtube-service/youtube-service';
/**
 * Generated class for the YoutubeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-youtube-detail',
  templateUrl: 'youtube-detail.html',
})
export class YoutubeDetailPage {
  item:any={};
  constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
     public ytService:YoutubeService
   ) {
     	this.item=this.navParams.get('item');
     	console.log(this.item);
  }
}

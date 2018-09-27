import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UnsplashService } from '../../../../providers/unsplash-service/unsplash-service';
/**
 * Generated class for the UnsplashModalPhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unsplash-modal-photo',
  templateUrl: 'unsplash-modal-photo.html',
})
export class UnsplashModalPhotoPage {
  data:any={};
  favoriest_list:any;
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public unsplashService:UnsplashService,
   public viewCtrl:ViewController){
     this.data=this.navParams.get('data');
     this.unsplashService.isFavorite(this.data).then(result=>{
      this.data.isFavorite=result;
     })
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryModalPage');
  }
}

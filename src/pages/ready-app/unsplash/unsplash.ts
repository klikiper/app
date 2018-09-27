import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';

/**
 * Generated class for the UnsplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unsplash',
  templateUrl: 'unsplash.html',
})
export class UnsplashPage {
  unsplashHomePage:any='UnsplashHomePage';
  unsplashCollectionPage:any='UnsplashCollectionPage';
  unsplashSearchPage:any='UnsplashSearchPage';
  unsplashFavoritePage:any='UnsplashFavoritePage';
  
  constructor(public navCtrl: NavController,
   public navParams: NavParams, 
   public modalCtrl:ModalController) {

  }

  ionViewDidLoad() {
    
  }
}

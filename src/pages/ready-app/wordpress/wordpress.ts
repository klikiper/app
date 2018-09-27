import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WordpressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wordpress',
  templateUrl: 'wordpress.html',
})
export class WordpressPage {
  wpHomePage:any='WordpressHomePage';
  wpCategoryPage:any='WordpressCategoryPage';
  wpSearchPage:any='WordpressSearchPage';
  wpFavoritePage:any='WordpressFavoritePage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WordpressPage');
  }

}

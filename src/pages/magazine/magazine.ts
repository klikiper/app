import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MagazinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({segment:'magazine-page'})
@Component({
  selector: 'page-magazine',
  templateUrl: 'magazine.html',
})
export class MagazinePage {
  magazineHomePage:any='MagazineHomePage';
  magazineBookmarkPage:any='MagazineBookmarkPage';
  magazineCategoryPage:any='MagazineCategoryPage';
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MagazinePage');
  }
}

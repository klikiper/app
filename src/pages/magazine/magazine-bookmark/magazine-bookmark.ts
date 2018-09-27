import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MagazineBookmarkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-magazine-bookmark',
  templateUrl: 'magazine-bookmark.html',
})
export class MagazineBookmarkPage {
  
  events: any={};
  data: any={};

  check_search: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.events.openDetail = function(item){
  		navCtrl.push('MagazineDetailPage');
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MagazineBookmarkPage');
  }

  show_search(){
    if(this.check_search == true){
      this.check_search = false;
    }else{
      this.check_search = true;
    }
  }
}

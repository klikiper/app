import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingService } from '../../providers/loading-service/loading-service';

/**
 * Generated class for the FragmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fragment',
  templateUrl: 'fragment.html',
})
export class FragmentPage {
  pages:any;
  subPage:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingService: LoadingService) {
  	this.pages=this.navParams.get('pages');
  	this.subPage=this.navParams.get('subPage');
    console.log(this.subPage);
    console.log(this.pages);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FragmentPage');
  }

  goTo(page){
    let that= this;
    this.loadingService.show();
  	this.navCtrl.push(this.subPage,{'page':page}).then(()=>{
      that.loadingService.dismiss();
    });
  }
}

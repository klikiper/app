import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
/**
 * Generated class for the AdmobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admob',
  templateUrl: 'admob.html',
})
export class AdmobPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public admob: AdMobFree) {
  	this.showBanner();
 }

  ionViewDidLoad() {
    
  }

  showBanner() {
        let bannerConfig: AdMobFreeBannerConfig = {
            isTesting: true, // Remove in production
            autoShow: true,
            id: '<your ad unit id>'
        };
        this.admob.banner.config(bannerConfig);
        this.admob.banner.prepare().then(() => {
        }).catch(e => console.log(e));
    }

     openInterstitial() {

        let interstitialConfig: AdMobFreeInterstitialConfig = {
            isTesting: true, // Remove in production
            autoShow: true,
            id: '<your ad unit id>'
        };
 
        this.admob.interstitial.config(interstitialConfig);
        this.admob.interstitial.prepare().then(() => {
        });
    }
}

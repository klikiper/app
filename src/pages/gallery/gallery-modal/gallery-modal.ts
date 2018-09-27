import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the GalleryModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-gallery-modal',
   templateUrl: 'gallery-modal.html',
 })
 export class GalleryModalPage {
   data:any={};
   events:any={};
   constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
     this.data=this.navParams.get('data');
     console.log(this.data);

     this.events.onDismiss=function(item){
        //navCtrl.pop();
        viewCtrl.dismiss();
     }
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad GalleryModalPage');
   }


 }

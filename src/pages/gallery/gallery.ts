import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
     selector: 'page-gallery',
     templateUrl: 'gallery.html',
 })
 export class GalleryPage {
     page:any;
     data:any={};
     events:any=[];

     constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
         this.page=this.navParams.get('page');
         if(this.page==undefined){
             this.navCtrl.setRoot('HomePage');
         }
         this.data=[
         { path: 'assets/img/demo1.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/demo2.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/demo3.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/demo4.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/demo5.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/demo6.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/demo7.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/demo8.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/demo9.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/demo10.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/demo11.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/demo12.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/bg1.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/bg2.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/bg3.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/bg4.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/bg5.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/bg6.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/bg7.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/bg8.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/bg10.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/bg11.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/bg12.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/bg13.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/bg14.jpg', title: 'Import MasonryModule into your apps modules' },
         { path: 'assets/img/bg15.jpg', title: 'Import MasonryModule into your apps modules' }
         ]; 
     
         this.events.onClick=function(item){
            let myModal = modalCtrl.create('GalleryModalPage',{'data':item});
            myModal.present();
         }
     }

     ionViewDidLoad() {
         console.log('ionViewDidLoad GalleryPage');
     }

 }

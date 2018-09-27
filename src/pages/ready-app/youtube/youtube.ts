import { Component } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';
import { YoutubeService } from '../../../providers/youtube-service/youtube-service';
/**
 * Generated class for the YoutubePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-youtube',
   templateUrl: 'youtube.html',
 })
 export class YoutubePage {
   data:Array<any>=new Array();
   next:any=null;
   spnState:string='show';

   constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public ytService:YoutubeService
     ) {
     this.data=new Array();
   }

   loadMore(infiniteScroll:any=null){
     var that = this;
     this.ytService.getVideos(this.next).subscribe(data=>{
       let items=data.items;
       for (var i = 0; i < items.length; i++) {
         let data=items[i];
         this.ytService.isFavorite(items[i]).then(result=>{
           data.isFavorite=false;
           this.data.push(data);
         })
       }
       this.next=data.nextPageToken;
       if(infiniteScroll){
         infiniteScroll.complete();
       }
       this.spnState='hide';
     },error=>{
       this.spnState='hide';
       if(infiniteScroll!=null){
         infiniteScroll.enable(false);
       }
     })
   }

   ionViewDidLoad() {
     this.loadMore();
   }

   ionViewDidEnter() {
     if(this.data.length!=0){
       for(let i = 0; i < this.data.length; i++) {
         this.ytService.isFavorite(this.data[i]).then(result=>{
           this.data[i].isFavorite=result;
         })
       }
     }
   }

 }

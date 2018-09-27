import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import {InstagramService} from '../../../providers/instagram/instagram'

/**
 * Generated class for the InstagramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instagram',
  templateUrl: 'instagram.html',
})
export class InstagramPage {
   list:Array<any>;
   next:any='';
   next_max_id:any=0;
   spnState:string='show';


   constructor(
     public navCtrl: NavController, 
     public http:Http,
     public isService: InstagramService,
     public navParams: NavParams) {
     this.list= new Array();
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad Instagram');
     this.loadMore();
   }

   loadMore(infiniteScroll:any=null){
     this.isService.getPosts(this.next).subscribe(data=>{
         var tmpData=data.data;
         this.next=data.pagination.next_url;
         this.list=this.list.concat(tmpData);
         if(infiniteScroll){
            infiniteScroll.complete();
         }
         this.spnState='hide';
     },error=>{
        if(infiniteScroll!=null){
           infiniteScroll.enable(false);
        }
        this.spnState='hide';
     });
   }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InstagramService } from '../../../../providers/instagram/instagram';
/**
 * Generated class for the InstagramCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instagram-comment',
  templateUrl: 'instagram-comment.html',
})
export class InstagramCommentPage {
  list:Array<any>;
  item:any;
  spnState:string='show';
  constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
   public instagramService:InstagramService
   ) {
  	this.item=this.navParams.get('item');
    this.instagramService.getComments(this.item).subscribe(data=>{
    	this.list=new Array<any>();
    	this.list=data.data;
      this.spnState='hide';
    },error=>{ 
      this.spnState='hide';
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstagramCommentPage');
  }
}

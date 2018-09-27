import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TwitterProvider} from '../../../providers/twitter/twitter';

/**
 * Generated class for the TwitterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-twitter',
  templateUrl: 'twitter.html',
})
export class TwitterPage {
list:Array<any>;
 	count:any=20;
 	max_id:any=null;
 	spnState:string='show';
 	constructor(public navCtrl: NavController,
 		public navParams: NavParams,
 		public twitterService:TwitterProvider
 		) {
 		this.list=new Array();
 	}

 	loadMore(infiniteScroll:any=null){
 		this.twitterService.getTweets(this.count,this.max_id).subscribe((data)=>{
 				var tmpData=data.json();
 				console.log(tmpData[0]);
 				this.max_id=tmpData[tmpData.length-1].id;
 				this.list=this.list.concat(tmpData);
 				if(infiniteScroll){
           			infiniteScroll.complete();
         		}
         		this.spnState='hide';
 	    });
 	}

 	ionViewDidLoad() {
 		this.loadMore()
 	}



}

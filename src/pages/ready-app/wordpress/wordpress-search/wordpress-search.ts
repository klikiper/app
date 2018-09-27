import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WordpressService } from '../../../../providers/wordpress/wordpress';
/**
 * Generated class for the WordpressSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wordpress-search',
  templateUrl: 'wordpress-search.html',
})
export class WordpressSearchPage {
  data:any=new Array();
  events: any={};
  page:number=0;
  per_page:number=5;
  query:string='';
  spnState:string='show';

  constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
   public wpService:WordpressService
   ) {

  }

  onInput(){
    this.spnState='show';
 		this.page=0;
 		this.data=[];
 		this.loadMore();
  }

  loadMore(infiniteScroll:any=null){
 		this.page+=1;
 		this.wpService.getPosts(this.page,this.per_page,this.query).subscribe(data=>{
 		    for (var i = 0;i< data.length ;i++){
 		    	let post={
 		    		 id:data[i].id,
 		    	   	 title:data[i].title.rendered,
 		    	   	 excerpt:data[i].excerpt.rendered,
 		    	   	 link:data[i].link,
 		    	   	 thumb:null,
 		    	   	 isFavorite:false
 		    	}

 		    	this.wpService.getMedia(data[i].featured_media).subscribe(media=>{
 		    		post.thumb=media.source_url;
 		    	});

 		    	this.wpService.isFavorite(data[i]).then(result=>{
      				post.isFavorite=result;
 					this.data.push(post);
                })
 		    };
 			this.spnState='hide';
 			if(infiniteScroll){
 				infiniteScroll.complete();
 			}
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
           this.wpService.isFavorite(this.data[i]).then(result=>{
              this.data[i].isFavorite=result;
                })
       }
     }
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WordpressService } from '../../../../providers/wordpress/wordpress';
/**
 * Generated class for the WordpressPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wordpress-posts',
  templateUrl: 'wordpress-posts.html',
})
export class WordpressPostsPage {
  	data:any=new Array();
 	events: any={};
 	page:number=0;
 	per_page:number=5;
 	categories_id:number;
 	spnState:string='show';

 	constructor(public navCtrl: NavController,
 		public navParams: NavParams,
 		public wpService:WordpressService){
 		this.categories_id=this.navParams.get('id');
 	}

 	loadMore(infiniteScroll:any=null){
 		this.page+=1;
 		this.wpService.getPostsByCategories(this.page,this.per_page,this.categories_id).subscribe(data=>{
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
 		    console.log(this.data);
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

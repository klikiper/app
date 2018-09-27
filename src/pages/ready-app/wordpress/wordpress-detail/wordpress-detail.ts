import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WordpressService } from '../../../../providers/wordpress/wordpress';
/**
 * Generated class for the WordpressDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wordpress-detail',
  templateUrl: 'wordpress-detail.html',
})
export class WordpressDetailPage {
  post_id:number=null;
  post:any=null;
  comments:any=new Array();
  page:number=0;
  per_page:number=20;
  spnState:string='show';
  favorite_post:any={};

  constructor(
  	public navCtrl: NavController,
    public navParams: NavParams,
	  public wpService:WordpressService
    ) {
  	this.post_id=this.navParams.get('id');
    if(this.post_id!=null){
  	  this.wpService.getPost(this.post_id).subscribe(data=>{
        this.post=data;
  		  this.favorite_post={
           id:data.id,
           title:data.title.rendered,
           excerpt:data.excerpt.rendered,
           link:data.link,
           thumb:null,
           isFavorite:false
        }


        this.wpService.getMedia(data.featured_media).subscribe(media=>{
             this.favorite_post.thumb=media.source_url;
        });
        
        this.wpService.isFavorite(this.favorite_post).then(result=>{
           this.favorite_post.isFavorite=result;
           console.log(this.favorite_post);
        })
        this.spnState='hide';
  	  })
    }else{
        this.spnState='hide';
    }
  }

  loadComment(){
      this.page+=1;
      this.wpService.getComments(this.page,this.per_page,this.post_id).subscribe(data=>{
        this.comments=this.comments.concat(data);
      });
  }


  ionViewDidLoad() {
    this.loadComment();
  }

  favorite(item){
     this.wpService.isFavorite(item).then(result=>{
      if(result==false){
        item.isFavorite=true;
        this.wpService.favorite(item);
      }else{
        item.isFavorite=false;
        this.wpService.unFavorite(item);
      }
     })
  }

  share(item){

  }


}

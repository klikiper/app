import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { TwitterService } from 'ng2-twitter';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
/*
  Generated class for the TwitterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */

  const config={
  	url:'https://api.twitter.com/1.1/statuses/home_timeline.json',
  	consumerKey:'g6SFahLWKtA3zgYDKbpxQywda',
  	consumerSecret:'cCqMOzPPSvxG9YqEXf0ceMS1UAHghNs1tm3Gf1NHyS6IcKJVqr',
  	token:'273344994-yDHtIyy9r64dVDtvo4EaZMxF6jh2itCTqlKVICn3',
  	secret:'NiVBWOA3asQlavbZwASIqnZlqzf9xgv1AahrRoeKP0y63'
  }

  @Injectable()
  export class TwitterProvider {
  	
  	constructor(public http: HttpClient,
  		public iab: InAppBrowser,
  		public twitterSerivce:TwitterService,
  		public socialSharing:SocialSharing
  		) {
  		
  	}

  	public getTweets(count:any,max_id:any=null):Observable<any>{
  		if(max_id==null){
  			return this.twitterSerivce.get(
  				config.url,
  				{
  					count: count
  				},
  				{
  					consumerKey: config.consumerKey,
  					consumerSecret: config.consumerSecret
  				},
  				{
  					token: config.token,
  					tokenSecret: config.secret
  				}
  				)
  		}else{
  			return this.twitterSerivce.get(
  				config.url,
  				{
  					count: count,
  					max_id: max_id
  				},
  				{
  					consumerKey: config.consumerKey,
  					consumerSecret: config.consumerSecret
  				},
  				{
  					token: config.token,
  					tokenSecret: config.secret
  				})
  		}
  		//end if
  	}

  	doOpen(item){
  		const browser = this.iab.create('https://twitter.com/'+item.user.id+'/status/'+item.id_str);
  	}

  	doShare(item){
  		this.socialSharing.share(item.user.name, item.text, null, 'https://twitter.com/'+item.user.id+'/status/'+item.id_str);
  	}
  }

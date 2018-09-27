import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {ToastService} from '../../providers/toast-service/toast-service';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
 export class ProfilePage {
  page:any;
  params:any={};
  data: any={};
  events: any={};
  
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public toastService:ToastService
   ) {
  	this.page=this.navParams.get('page');
    if(this.page==undefined){
        this.navCtrl.setRoot('HomePage');
    }

    let that =this;
    this.data[0]={
      label:{
        txtLikes: 'Likes',
        txtFollower:'Follower',
        txtFollowing:'Following',
        txtPosted:'Posted',
        txtSocial:'Social',
        txtAboutMe:'About Me',
        txtContactMe:'Contact Me',
        btnFollow:'Follow',
        btnAddFriend:'Add Friend'
      },
      user:{
        imgAvatar:'assets/img/avt1.jpg',
        username:'Lrandom',
        job:'Developer',
        followerCount:'193',
        followingCount:'237',
        postCount:'1200',
        aboutMe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa ante, sollicitudin sit amet ante et, suscipit ultrices justo. Duis tellus neque, lacinia non aliquam eget, aliquet sed neque. Etiam a dolor ligula.',
        address:'Ha Long',
        mail:'luann4099@gmail.com',
        phone:'0868120192'
      },
      photos:[
          {
             path:'assets/img/bg1.jpg'
          },
          {
             path:'assets/img/bg2.jpg'
          },
          {
             path:'assets/img/bg3.jpg'
          },
          {
             path:'assets/img/bg4.jpg'
          },
          {
             path:'assets/img/bg5.jpg'
          }
      ]
    };


    this.events[0]={
        onFacebookIconClick:function(){
            that.toastService.presentToast('facebook icon clicked');
        },
        onTwitterIconClick:function(){
            that.toastService.presentToast('twitter icon clicked');
        },
        onDribbleIconClick:function(){
            that.toastService.presentToast('dribble icon clicked');
        },
        onLinkedInIconClick:function(){
            that.toastService.presentToast('linkedin icon clicked');
        },
        onInstagramIconClick:function(){
            that.toastService.presentToast('instagram icon cliked');
        },
        onPinterestIconClick:function(){
            that.toastService.presentToast('pinterest icon clicked');
        },
        onGoogleIconClick:function(){
            that.toastService.presentToast('google icon clicked');
        },
        onFollowClick:function(){
            that.toastService.presentToast('button follow clicked');
        },
        onAddFriendClick:function(){
            that.toastService.presentToast('button add friend clicked');
        }
    }

    this.data[1]={
      label:{
        txtFollower:'Follower',
        txtFollowing:'Following',
        txtPosted:'Posted',
        txtPhotos:'Photos',
        txtAboutMe:'About Me',
        btnFollow:'Follow',
        btnAddFriend:'Add Friend'
      },
      user:{
        imgAvatar:'assets/img/avt5.jpg',
        imgCover:'assets/img/bg15.jpg',
        username:'Lrandom',
        job:'Developer',
        followerCount:'193',
        followingCount:'237',
        photosCount:'1200',
        aboutMe:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa ante, sollicitudin sit amet ante et, suscipit ultrices justo. Duis tellus neque, lacinia non aliquam eget, aliquet sed neque. Etiam a dolor ligula.'
      },
      photos:[
          {
             path:'assets/img/bg1.jpg'
          },
          {
             path:'assets/img/bg2.jpg'
          },
          {
             path:'assets/img/bg3.jpg'
          },
          {
             path:'assets/img/bg4.jpg'
          },
          {
             path:'assets/img/bg5.jpg'
          }
      ]
    }


    this.events[1]={
        onFacebookIconClick:function(){
            that.toastService.presentToast('facebook icon clicked');
        },
        onTwitterIconClick:function(){
            that.toastService.presentToast('twitter icon clicked');
        },
        onDribbleIconClick:function(){
            that.toastService.presentToast('dribble icon clicked');
        },
        onLinkedInIconClick:function(){
            that.toastService.presentToast('linkedin icon clicked');
        },
        onInstagramIconClick:function(){
            that.toastService.presentToast('instagram icon cliked');
        },
        onPinterestIconClick:function(){
            that.toastService.presentToast('pinterest icon clicked');
        },
        onGoogleIconClick:function(){
            that.toastService.presentToast('google icon clicked');
        },
        onFollowClick:function(){
            that.toastService.presentToast('button follow clicked');
        },
        onAddFriendClick:function(){
            that.toastService.presentToast('button add friend clicked');
        }
    }

    this.data[2]={
      label:{
        txtFollower:'Follower',
        txtFollowing:'Following',
        txtLikes:'Likes',
        txtPhotos:'Photos',
        txtApps:'Apps',
        txtWebs:'Webs',
        txtVideos:'Videos',
        btnFollow:'Follow',
        btnMessage:'Send Message'
      },
      user:{
        imgAvatar:'assets/img/avt5.jpg',
        imgCover:'assets/img/bg15.jpg',
        username:'Lrandom',
        job:'Developer',
        quote:'It is great day',
        followerCount:'193',
        followingCount:'237',
        likeCount:'2040'
      },
      photos:[
          {
             path:'assets/img/bg1.jpg'
          },
          {
             path:'assets/img/bg2.jpg'
          },
          {
             path:'assets/img/bg3.jpg'
          },
          {
             path:'assets/img/bg4.jpg'
          },
          {
             path:'assets/img/bg5.jpg'
          }
      ],
           videos:[
          {
             path:'assets/img/bg1.jpg'
          },
          {
             path:'assets/img/bg2.jpg'
          },
          {
             path:'assets/img/bg3.jpg'
          },
          {
             path:'assets/img/bg4.jpg'
          },
          {
             path:'assets/img/bg5.jpg'
          },
            {
             path:'assets/img/bg6.jpg'
          },
            {
             path:'assets/img/bg7.jpg'
          }
      ],
            apps:[
          {
             path:'assets/img/bg1.jpg'
          },
          {
             path:'assets/img/bg2.jpg'
          },
          {
             path:'assets/img/bg3.jpg'
          },
          {
             path:'assets/img/bg4.jpg'
          },
          {
             path:'assets/img/bg5.jpg'
          }
      ],
            webs:[
          {
             path:'assets/img/bg1.jpg'
          },
          {
             path:'assets/img/bg2.jpg'
          },
          {
             path:'assets/img/bg3.jpg'
          },
          {
             path:'assets/img/bg4.jpg'
          },
          {
             path:'assets/img/bg5.jpg'
          }
      ]
    }


    this.events[2]={
        onFollowClick:function(){
            that.toastService.presentToast('button follow clicked');
        },
        onSendMessageClick:function(){
            that.toastService.presentToast('button send message clicked');
        }
    }

    this.data[3]={
      label:{
        txtLikes:'Likes',
        txtFollower:'Follower',
        txtFollowing:'Following',
        txtPins:'Pins',
        txtPosted:'Posted',
        btnFollow:'Follow',
        btnMessage:'Send An Message'
      },
      user:{
        imgAvatar:'assets/img/avt5.jpg',
        imgCover:'assets/img/bg15.jpg',
        likeCount:'371',
        username:'Lrandom',
        followerCount:'193',
        followingCount:'237',
        address:'Ha Long',
        quote: 'I have a great day'
      },
        photos:[
          {
             path:'assets/img/bg1.jpg'
          },
          {
             path:'assets/img/bg2.jpg'
          },
          {
             path:'assets/img/bg3.jpg'
          },
          {
             path:'assets/img/bg4.jpg'
          },
          {
             path:'assets/img/bg5.jpg'
          }
      ],
        pins:[
          {
             path:'assets/img/bg1.jpg'
          },
          {
             path:'assets/img/bg2.jpg'
          },
          {
             path:'assets/img/bg3.jpg'
          },
          {
             path:'assets/img/bg4.jpg'
          },
          {
             path:'assets/img/bg5.jpg'
          },
          {
             path:'assets/img/bg6.jpg'
          }
      ]
    }

    this.events[3]={
        onFacebookIconClick:function(){
            that.toastService.presentToast('facebook icon clicked');
        },
        onTwitterIconClick:function(){
            that.toastService.presentToast('twitter icon clicked');
        },
        onInstagramIconClick:function(){
            that.toastService.presentToast('instagram icon cliked');
        },
        onFollowClick:function(){
            that.toastService.presentToast('button follow clicked');
        },
        onSendMessageClick:function(){
            that.toastService.presentToast('button send message clicked');
        }
    }

    this.data[4]={
      label:{
        txtLikes:'Likes',
        txtFollower:'Follower',
        txtFollowing:'Following',
        txtMyCollection:'My Collection',
        txtItems:'items'
      },
      user:{
        imgAvatar:'assets/img/avt5.jpg',
        imgCover:'assets/img/bg15.jpg',
        likeCount:'371',
        username:'Lrandom',
        job:'Developer',
        followerCount:'193',
        followingCount:'237'
      },
      collections:[
          {
              path:'assets/img/bg1.jpg',
              itemsCount:'1k',
              name:'Landscape Pics'
          },
          {
              path:'assets/img/bg2.jpg',
              itemsCount:'1.5k',
              name:'Landscape Pics'
          },
          {
              path:'assets/img/bg3.jpg',
              itemsCount:'1.9k',
              name:'Landscape Pics'
          },
          {
              path:'assets/img/bg4.jpg',
              itemsCount:'2k',
              name:'Landscape Pics'
          },
          {
              path:'assets/img/bg5.jpg',
              itemsCount:'4k',
              name:'Landscape Pics'
          }
      ]
    }


    this.data[5]={
      label:{
        txtPosted:'Posted',
        txtPins:'Pins',
        txtFollower:'Follower',
        txtFollowing:'Following'
      },
      user:{
        imgAvatar:'assets/img/avt3.jpg',
        likeCount:'371',
        username:'Lrandom',
        followerCount:'193',
        followingCount:'237',
        pinCount:'2.4k',
        postCount:'1200',
        address:'Ha Long'
      }
    }

    this.events[5]={
        onSettingClick:function(){
            that.toastService.presentToast('button setting clicked');
        },
        onSendMessageClick:function(){
            that.toastService.presentToast('button send message clicked');
        }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}

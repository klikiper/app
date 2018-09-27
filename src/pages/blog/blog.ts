import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
 export class BlogPage {
  page:any;
  params:any={};
  data:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.page=this.navParams.get('page');
    this.data={ 
      txtFromYou: 'Form You',
      txtFromDay: 'From Day',
    };

    // this.events.openConversation=function(item){
    //   let chatModal = modalCtrl.create('ChatConversationPage',{'data':item});
    //   chatModal.present();
    // }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
  }

}

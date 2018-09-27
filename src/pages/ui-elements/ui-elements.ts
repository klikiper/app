import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ui-elements',
  templateUrl: 'ui-elements.html',
})
export class UiElementsPage {
  page:any;
  params:any={};
  data: any={};
  events: any={};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.page=this.navParams.get('page');
  	this.data={
  				txtHead:'Login',
          txtHead1:'Your Email',
          txtHead2:'Your Password',
  				txtUserName:'Username',
  				txtPassword:'Password',
          txtConfirm:'Confirm',
          txtEmail:'Email',
  				txtLogin:'Login',
  				txtSignUp:'Create new Account',
          txtSignUpShort:'Signup',
          txtGoogleLogin:'Login with google',
          txtFacebookLogin:'Login with facebook',
          txtTwitterLogin:'Login with twitter',
          txtOr:'Or',
          txtDesc:'Lorem ipsum dolor sit amen',
          txtConfirmPassword:'Confirm Password',
          txtForgotPassword:'Forgot Password ?',
  				imgBackground1:'assets/img/bg9.jpg',
          imgBackground2:'assets/img/bg16.jpg',
          imgBackground3:'assets/img/bg18.jpg',
          imgBackground4:'assets/img/bg17.jpg',
          imgBackground5:'assets/img/bg14.jpg',
  				imgLogoLight:'assets/img/chimera_w.png',
          imgLogoDark:'assets/img/chimera_b.png',
          txtDesc1:'Lorem ipsum dolor sit amen 1',
          txtDesc2:'Lorem ipsum dolor sit amen 2',
    };

  	this.events.onDismiss=function(item){
      navCtrl.pop();
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UiElementsPage');
  }

}

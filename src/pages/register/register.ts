import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {ToastService} from '../../providers/toast-service/toast-service';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
 export class RegisterPage {
  page:any;
  params:any={};
  events:any=[];
  data: any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public toastService:ToastService) {
  	this.page=this.navParams.get('page');
    if(this.page==undefined){
       this.navCtrl.setRoot('HomePage');
    }

    this.data=[
      {
        txtHead:'Create New Account',
        btnSignUp:'SignUp',
        imgLogo:'assets/img/chimera_b.png'
      },
      {
        txtHead:'Create New Account',
        btnSignUp:'SignUp',
        btnForgotPassword:'Forgot Password',
        txtFullName:'Fullname',
        txtAddress:'Address',
        txtEmail:'Email',
        txtPassword:'Password',
        imgLogo:'assets/img/chimera_b.png'
      },
      {
        txtHead:'Create New Account',
        btnSignUp:'SignUp',
        btnForgotPassword:'Forgot Password',
        txtUserName:'UserName',
        txtFullName:'Fullname',
        txtAddress:'Address',
        txtEmail:'Email',
        txtPassword:'Password',
        imgLogo:'assets/img/chimera_w.png',
        imgBg:'assets/img/bg14.jpg'
      },
      {
        txtHead:'Sign Up',
        txtAnswer:'Who You Are?',
        txtUser1:'Designer',
        txtUser2:'Coder',
        txtUser3:'Viewer',
        btnSignUp:'SignUp',
        txtLogin: 'You have an account?',
        btnLogin: 'Login Now',
        txtUserName: 'UserName',
        txtEmail:'Email',
        txtPassword:'Password',
        txtConfirmPassword:'Confirm Password',
        avt1:'assets/img/avt1.jpg',
        avt2:'assets/img/avt2.jpg',
        avt3:'assets/img/avt3.jpg'
      },
      {
        txtHead: 'Sign Up',
        btnSignUp: 'SignUp',
        txtFullName: 'Full Name',
        txtAddress: 'Address',
        txtLogin: 'You have an account?',
        btnLogin: 'Login Now',
        txtUserName: 'UserName',
        txtEmail: 'Email',
        txtPassword: 'Password',
        txtConfirmPassword: 'Confirm Password',
        imgBg: 'assets/img/demo6.jpg'
      },
      {
        txtHead:'Sign Up',
        txtAnswer:'Who You Are?',
        txtFullName: 'Full Name',
        txtAddress: 'Address',
        btnSignUp:'SignUp',
        txtUserName: 'UserName',
        txtEmail:'Email',
        txtPassword:'Password',
        txtConfirmPassword:'Confirm Password',
        imgBg:'assets/img/bg14.jpg'
      }
    ]

    let that = this;
    this.events[0]={
       onDismiss:function(){
         navCtrl.pop();
       },
       onSignUp:function(item){
         that.toastService.presentToast(JSON.stringify(item));
       }
    }

    this.events[1]={
       onDismiss:function(){
         navCtrl.pop();
       },
       onSignUp:function(item){
         that.toastService.presentToast(JSON.stringify(item));
       },
       onForgotPassword:function(){
         that.toastService.presentToast('Forgot password Clicked');
       }
    }

    this.events[2]={
       onDismiss:function(){
         navCtrl.pop();
       },
       onSignUp:function(item){
         that.toastService.presentToast(JSON.stringify(item));
       },
       onForgotPassword:function(){
         that.toastService.presentToast('Forgot password Clicked');
       }
    }

    this.events[3]={
       onDismiss:function(){
         navCtrl.pop();
       },
       onSignUp:function(item){
         that.toastService.presentToast(JSON.stringify(item));
       },
       onForgotPassword:function(){
         that.toastService.presentToast('Forgot password Clicked');
       }
    }


    this.events[4]={
       onDismiss:function(){
         navCtrl.pop();
       },
       onSignUp:function(item){
          let modal = that.modalCtrl.create('SuccessSignupComponent');
          modal.present();
          // that.toastService.presentToast(JSON.stringify(item));
       },
       onForgotPassword:function(){
         that.toastService.presentToast('Forgot password Clicked');
       }
    }


    this.events[5]={
       onDismiss:function(){
         navCtrl.pop();
       },
       onSignUp:function(item){
          let modal = that.modalCtrl.create('SuccessSignupComponent');
          modal.present();
          // that.toastService.presentToast(JSON.stringify(item));
       },
       onForgotPassword:function(){
         that.toastService.presentToast('Forgot password Clicked');
       }
    }


    this.events[6]={
       onDismiss:function(){
         navCtrl.pop();
       },
       onSignUp:function(item){
         that.toastService.presentToast(JSON.stringify(item));
       },
       onForgotPassword:function(){
         that.toastService.presentToast('Forgot password Clicked');
       }
    }



    this.events.onDismiss=function(item){
      navCtrl.pop();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}

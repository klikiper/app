import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ToastService} from '../../providers/toast-service/toast-service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-login',
   templateUrl: 'login.html',
 })
 export class LoginPage {
   page:any;
   params:any={};
   data: any=[];
   events: any=[];

   constructor(public navCtrl: NavController,
     public toastService:ToastService,
     public navParams: NavParams) {
     this.page=this.navParams.get('page');
     if(this.page==undefined){
       this.navCtrl.setRoot('HomePage');
     }

     this.data=[
     {
       txtHead:'Login',
       txtUserName:'UserName',
       txtPassword:'Password',
       btnLogin:'Login',
       btnSignUp:'Signup',
       imgLogo:'assets/img/chimera_b.png'
     },
     {
       txtHead:'Lorem ipsum dolor sit amen',
       txtUserName:'UserName',
       txtPassword:'Password',
       txtOr:'Or',
       btnLogin:'Login',
       btnFacebookLogin:'Login with Facebook',
       btnGoogleLogin:'Login with Google',
       btnSignUp:'Create new Account',
       btnForgotPassword:'Forgot Password ?',
       imgLogo:'assets/img/chimera_w.png',
       imgBg:'assets/img/bg9.jpg' 
     },
     {
       txtHead:'Lorem ipsum dolor sit amen',
       txtUserName:'UserName',
       txtPassword:'Password',
       btnLogin:'Login',
       btnForgotPassword:'Forgot Password ?',
       btnSignUp:'Create new Account',
       imgBg:'assets/img/bg16.jpg',
       imgLogo:'assets/img/chimera_w.png'
     },
     {
       txtHead:'Lorem ipsum dolor sit amen',
       txtUserName:'UserName',
       txtPassword:'Password',
       btnLogin:'Login',
       btnForgotPassword:'Forgot Password ?',
       imgBg:'assets/img/bg16.jpg',
       imgLogo:'assets/img/chimera_b.png'
     },
     {
       txtHead:'Lorem ipsum dolor sit amen',
       txtUserName:'UserName',
       txtPassword:'Password',
       btnLogin:'Login',
       btnSignUp:'Create new Account',
       btnForgotPassword:'Forgot Password ?',
       imgBg:'assets/img/bg18.jpg',
       imgLogo:'assets/img/chimera_w.png'
     },
     {
       txtHead:'Lorem ipsum dolor sit amen',
       txtEmail:'Email',
       txtUserName:'UserName',
       txtPassword:'Password',
       txtConfirmPassword:'Confirm Password',
       btnSegmentLogin:'Login',
       btnSegmentSignUp:'SignUp',
       btnLogin:'Login',
       btnSignUp:'Create new Account',
       btnForgotPassword:'Forgot Password ?',
       imgBg:'assets/img/bg18.jpg',
       imgLogo:'assets/img/chimera_w.png'
     },
     {
       txtHead1:'Lorem ipsum dolor sit amen 1',
       txtHead2:'Lorem ipsum dolor sit amen 1',
       txtHead3:'Lorem ipsum dolor sit amen 3',
       txtHead4:'Lorem ipsum dolor sit amen 4',
       txtEmail:'Email',
       txtUserName:'UserName',
       txtPassword:'Password',
       txtConfirmPassword:'Confirm Password',
       btnSegmentLogin:'Login',
       btnSegmentSignUp:'SignUp',
       btnLogin:'Login',
       btnSignUp:'Create new Account',
       btnForgotPassword:'Forgot Password ?',
       imgBg:'assets/img/bg14.jpg',
       imgLogo:'assets/img/chimera_w.png'
     },
     ]

     let that = this;
     this.events[0]={
       onDismiss:function(){
         navCtrl.pop();
       },
       onLogin:function(item){
         that.toastService.presentToast("Value: "+item.username+"-"+item.password);
       },
       onSignUp:function(){
         that.toastService.presentToast("SignUp Clicked");
       }
     }

     this.events[1]={
       onDismiss:function(){
         navCtrl.pop();
       },
       onLogin:function(item){
         that.toastService.presentToast("Value: "+item.username+"-"+item.password);
       },
       onSignUp:function(){
         that.toastService.presentToast("SignUp Clicked");
       },
       onFacebookLogin:function(){
         that.toastService.presentToast("Facebook Login Clicked")
       },
       onGoogleLogin:function(){
         that.toastService.presentToast("Google Login Clicked");
       },
       onForgotPassword:function(){
         that.toastService.presentToast("Forgot Password Clicked");
       }
     }

     this.events[2]={
       onDismiss:function(){
         navCtrl.pop();
       },
       onLogin:function(item){
         that.toastService.presentToast("Value: "+item.username+"-"+item.password);
       },
       onSignUp:function(){
         that.toastService.presentToast("SignUp Clicked");
       },
       onFacebookLogin:function(){
         that.toastService.presentToast("Facebook Login Clicked")
       },
       onTwitterLogin:function(){
         that.toastService.presentToast("Twitter Login Clicked");
       },
       onForgotPassword:function(){
         that.toastService.presentToast("Forgot Password Clicked");
       }
     }

     this.events[3]={
       onDismiss:function(){
         navCtrl.pop();
       },
       onLogin:function(item){
         that.toastService.presentToast("Value: "+item.username+"-"+item.password);
       },
       onSignUp:function(){
         that.toastService.presentToast("SignUp Clicked");
       },
       onForgotPassword:function(){
         that.toastService.presentToast("Forgot Password Clicked");
       }
     }

     this.events[4]={
       onDismiss:function(){
         navCtrl.pop();
       },
       onLogin:function(item){
         that.toastService.presentToast("Value: "+item.username+"-"+item.password);
       },
       onSignUp:function(){
         that.toastService.presentToast("SignUp Clicked");
       },
       onFacebookLogin:function(){
         that.toastService.presentToast("Facebook Login Clicked")
       },
       onTwitterLogin:function(){
         that.toastService.presentToast("Twitter Login Clicked");
       },
       onForgotPassword:function(){
         that.toastService.presentToast("Forgot Password Clicked");
       }
     }


     this.events[5]={
       onDismiss:function(){
         navCtrl.pop();
       },
       onLogin:function(item){
         that.toastService.presentToast("Value: "+item.email+"-"+item.password);
       },
       onSignUp:function(item){
         that.toastService.presentToast("Value: "+item.signUpEmail+"-"+item.signUpPassword);
       },
       onFacebookLogin:function(){
         that.toastService.presentToast("Facebook Login Clicked")
       },
       onTwitterLogin:function(){
         that.toastService.presentToast("Twitter Login Clicked");
       },
       onForgotPassword:function(){
         that.toastService.presentToast("Forgot Password Clicked");
       },
       onFacebookIconClick:function(){
         that.toastService.presentToast("Facebook Icon Clicked");
       },
       onGoogleIconClick:function(){
         that.toastService.presentToast("Google Icon Clicked");
       },
       onTwitterIconClick:function(){
         that.toastService.presentToast("Twitter Icon Clicked");
       },
       onLinkedInIconClick:function(){
         that.toastService.presentToast("LinkedIn Icon Clicked");
       }
     }

     this.events[6]={
       onDismiss:function(){
         navCtrl.pop();
       },
       onLogin:function(item){
         that.toastService.presentToast("Value: "+item.email+"-"+item.password);
       },
       onForgotPassword:function(){
         that.toastService.presentToast("Forgot Password Clicked");
       },
     }


   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad LoginPage');
   }

 }

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ToastService } from '../../providers/toast-service/toast-service'
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-about',
   templateUrl: 'about.html',
 })
 export class AboutPage {
   page:any;
   params:any={};
   data:any={};
   events:any={};

   constructor(
     public navCtrl: NavController, 
     public navParams: NavParams,
     public modalCtrl:ModalController,
     public toastService:ToastService
     ) {
     this.page=this.navParams.get('page');
     console.log(this.page);
     if(this.page==undefined){
       this.navCtrl.setRoot('HomePage');
     }
       this.data={
         label:{
           txtContact:'Contact',
           txtContactUs:'Contact Us',
           txtAboutUs: 'Contact information',
           txtPhone:'Phone',
           txtGetInTouch:'Get In Touch',
           txtAddress:'Address',
           txtSendMessage:'Send Message',
           txtFullName:'Full Name',
           txtEmail:'Email',
           txtMessage:'Message',
           txtSend:'Send',
           txtSendAMessage:'Send A Message',
           txtFollow: 'Follow Us',
           txtFollowWidth: 'Follow Us Width!'
         },
         google_map:'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d27583.016935900032!2d105.83403782350675!3d21.036132526875356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x0%3A0x85839944f456f253!2zUXXhuqNuZyB0csaw4budbmcgQmEgxJDDrG5o!3m2!1d21.037447999999998!2d105.8360008!5e0!3m2!1svi!2s!4v1496303332325',
         about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         address1:'2b/324 Thuy Khue, Tay Ho, Ha Noi',
         address2:'Hoan Kiem, Ha Noi, Viet Nam',
         phone1:'+84 868120192',
         phone2:'+84 868271095',
         email1:'luann4099@gmail.com',
         email2:'koodinh@gmail.com',
         open_time:'08:00 Am - 11:30 Am',
         close_time:'01:00 Pm - 04:00 Pm',
         txtWorkingTime: 'We work from Monday to Saturday weekly',
         workingTime:'9:00 AM - 4:00 PM'
       };

       this.events.onSendMessage=function(item){
         toastService.presentToast("Values: "+item.fullname+"-"+item.email+"-"+item.message);
       }

   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad AboutPage');
   }
 }

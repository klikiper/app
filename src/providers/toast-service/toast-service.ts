import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ToastController} from 'ionic-angular';

/*
  Generated class for the ToastServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastService{

  constructor(private toastCtrl:ToastController) {
   
  }

  presentToast(message: string){
  	let toast = this.toastCtrl.create({
  		'message':message,
  		'duration':100
  	});
  	toast.present()
  }

}

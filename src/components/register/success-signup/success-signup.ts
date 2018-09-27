import { Component, Input } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';


/**
 * Generated class for the RegisterV3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @IonicPage()
 @Component({
 	selector: 'success-signup',
 	templateUrl: 'success-signup.html'
 })
 export class SuccessSignupComponent {

 	@Input() events: any;
 	@Input() data: any;

 	public username:string;
 	public fullname:string;
 	public email:string;
 	public address:string;
 	public password:string;
 	
 	constructor(public viewCtrl: ViewController) {
 		console.log('Hello SuccessSignupComponent Component');
 	}

 	dismiss() {
 		this.viewCtrl.dismiss();
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]({

 			});
 		}
 	}

 }

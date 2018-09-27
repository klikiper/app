import { Component, Input, ViewChild } from '@angular/core';

/**
 * Generated class for the RegisterV3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'register-v6',
 	templateUrl: 'register-v6.html'
 })
 export class RegisterV6Component {

 	@Input() events: any;
 	@Input() data: any;

 	public username:string;
 	public fullname:string;
 	public email:string;
 	public address:string;
 	public password:string;

	@ViewChild('signupSlider') signupSlider: any;
	
 	
 	constructor() {
 		console.log('Hello RegisterV3Component Component');
 	}

 	next(){
 		this.signupSlider.slideNext();
 	}

 	prev(){
 		this.signupSlider.slidePrev();
  	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]({
 			    'username':this.username,
 				'fullname':this.fullname,
 				'email':this.email,
 				'address':this.address,
 				'password':this.password
 			});
 		}
 	}

 }

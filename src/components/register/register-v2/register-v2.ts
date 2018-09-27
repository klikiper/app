import { Component, Input, ViewChild } from '@angular/core';

/**
 * Generated class for the RegisterV2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'register-v2',
 	templateUrl: 'register-v2.html'
 })
 export class RegisterV2Component {

 	@Input() events: any;
 	@Input() data: any;
 	@ViewChild('signupSlider') signupSlider: any;

 	public username:string;
 	public fullname:string;
 	public email:string;
 	public address:string;
 	public password:string;
 	
 	constructor() {
 		console.log('Hello RegisterV2Component Component');
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

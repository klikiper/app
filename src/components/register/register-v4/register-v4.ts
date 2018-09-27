import { Component, Input } from '@angular/core';

/**
 * Generated class for the RegisterV3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'register-v4',
 	templateUrl: 'register-v4.html'
 })
 export class RegisterV4Component {

 	@Input() events: any;
 	@Input() data: any;

 	public username:string;
 	public fullname:string;
 	public email:string;
 	public address:string;
 	public password:string;
 	
 	constructor() {
 		console.log('Hello RegisterV3Component Component');
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

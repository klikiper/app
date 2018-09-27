import { Component, Input } from '@angular/core';

/**
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'register-v1',
 	templateUrl: 'register-v1.html'
 })
 export class RegisterV1Component {
 	@Input() events: any;
 	@Input() data: any;

 	public username:string;
 	public fullname:string;
 	public email:string;
 	public phone:string;
 	public address:string;
 	public password:string;

 	constructor() {
 		console.log('Hello RegisterV1Component Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]({
 				'username':this.username,
 				'fullname':this.fullname,
 				'email':this.email,
 				'phone':this.phone,
 				'address':this.address,
 				'password':this.password
 			});
 		}
 	}

 }

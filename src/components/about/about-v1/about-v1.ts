import { Component,Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the AboutV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

 @Component({
 	selector: 'about-v1',
 	templateUrl: 'about-v1.html'
 })

 export class AboutV1Component {
 	@Input() data: any;
 	@Input() events: any;

  	public fullname: string;
  	public email: string;
  	public message: string;

 	constructor(public sanitizer: DomSanitizer) {
 		
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]({
 				'fullname':this.fullname,
 				'email':this.email,
 				'message':this.message
 			});
 		}
 	}

 }

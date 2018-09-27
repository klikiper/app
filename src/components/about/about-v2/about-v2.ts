import { Component, Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the AboutV2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'about-v2',
 	templateUrl: 'about-v2.html'
 })

 export class AboutV2Component {
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

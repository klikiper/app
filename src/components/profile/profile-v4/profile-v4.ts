import { Component,Input } from '@angular/core';

/**
 * Generated class for the ProfileV4Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'profile-v4',
 	templateUrl: 'profile-v4.html'
 })
 export class ProfileV4Component {
 	@Input() data: any;
 	@Input() events: any;

 	show_prd: any="posted";

 	constructor() {
 		
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}
 	
 }

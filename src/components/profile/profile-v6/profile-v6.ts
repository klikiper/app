import { Component,Input } from '@angular/core';

/**
 * Generated class for the ProfileV6Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'profile-v6',
 	templateUrl: 'profile-v6.html'
 })
 export class ProfileV6Component {
 	@Input() data: any;
 	@Input() events: any;

 	constructor() {
 		
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }

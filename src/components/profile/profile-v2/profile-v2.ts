import { Component,Input } from '@angular/core';

/**
 * Generated class for the ProfileV2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'profile-v2',
 	templateUrl: 'profile-v2.html'
 })
 export class ProfileV2Component {
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

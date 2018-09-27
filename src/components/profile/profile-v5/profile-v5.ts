import { Component, Input} from '@angular/core';

/**
 * Generated class for the ProfileV5Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'profile-v5',
 	templateUrl: 'profile-v5.html'
 })
 export class ProfileV5Component {
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

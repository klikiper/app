import { Component,Input} from '@angular/core';

/**
 * Generated class for the ProfileV3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'profile-v3',
 	templateUrl: 'profile-v3.html'
 })
 export class ProfileV3Component {

 	@Input() data: any;
 	@Input() events: any;

 	show_prd: any='photos';

 	constructor() {
 		
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }

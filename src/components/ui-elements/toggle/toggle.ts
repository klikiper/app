import { Component, Input } from '@angular/core';

/**
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'toggle',
 	templateUrl: 'toggle.html'
 })
 export class ToggleComponent {

 	@Input() events: any;
 	@Input() data: any;

 	constructor() {
 		console.log('Hello ToggleComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 	// lorem impsum

 }

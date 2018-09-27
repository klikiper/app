import { Component, Input } from '@angular/core';

/**
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'validate-form',
 	templateUrl: 'validate-form.html'
 })
 export class ValidateFormComponent {

 	@Input() events: any;
 	@Input() data: any;
 	temp: any;
 	
 	constructor() {
 		console.log('Hello ValidateFormComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }

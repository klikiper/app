import { Component, Input } from '@angular/core';

/**
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'range',
 	templateUrl: 'range.html'
 })
 export class RangeComponent {

 	@Input() events: any;
 	@Input() data: any;

 	brightness: number = 20;
 	contrast: number = 0;
 	warmth: number = 1300;
 	structure: any = { lower: 33, upper: 60 };
 	text: number = 0;

 	constructor() {
 		console.log('Hello RangeComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 	// lorem impsum

 }

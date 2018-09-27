import { Component, Input } from '@angular/core';

/**
 * Generated class for the RegisterV1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'menus',
 	templateUrl: 'menus.html'
 })
 export class MenusComponent {

 	@Input() events: any;
 	@Input() data: any;

 	constructor() {
 		console.log('Hello MenusComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 	// lorem impsum

 }

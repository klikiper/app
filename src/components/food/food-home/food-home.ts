import { Component, Input } from '@angular/core';

/**
 * Generated class for the ShopHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'food-home',
 	templateUrl: 'food-home.html'
 })
 export class FoodHomeComponent {

 	@Input() events: any;
 	@Input() data: any;


 	constructor() {
 		console.log('Hello FoodHomeComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }

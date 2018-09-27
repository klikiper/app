import { Component, Input } from '@angular/core';

/**
 * Generated class for the ShopCheckoutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'food-checkout',
 	templateUrl: 'food-checkout.html'
 })
 export class FoodCheckoutComponent {

 	@Input() events: any;
 	@Input() data: any;


 	constructor() {
 		console.log('Hello FoodCheckoutComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }

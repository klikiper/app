import { Component, Input } from '@angular/core';

/**
 * Generated class for the ShopCheckoutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'shop-checkout',
 	templateUrl: 'shop-checkout.html'
 })
 export class ShopCheckoutComponent {

 	@Input() events: any;
 	@Input() data: any;


 	constructor() {
 		console.log('Hello ShopCheckoutComponent Component');
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }

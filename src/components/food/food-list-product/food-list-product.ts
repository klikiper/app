import { Component, Input } from '@angular/core';

/**
 * Generated class for the ShopDetailProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'food-list-product',
 	templateUrl: 'food-list-product.html'
 })
 export class FoodListProductComponent {

 	@Input() events: any;
 	@Input() data: any;


 	constructor() {
 		console.log('Hello FoodListProductComponent Component');    
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }

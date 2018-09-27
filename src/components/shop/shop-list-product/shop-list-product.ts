import { Component, Input } from '@angular/core';

/**
 * Generated class for the ShopDetailProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'shop-list-product',
 	templateUrl: 'shop-list-product.html'
 })
 export class ShopListProductComponent {

 	@Input() events: any;
 	@Input() data: any;


 	constructor() {
 		console.log('Hello ShopListProductComponent Component');    
 	}

 	onCallbackEvent = (event: string): void => {
 		if (this.events[event]) {
 			this.events[event]();
 		}
 	}

 }
